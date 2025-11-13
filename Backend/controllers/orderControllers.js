import orderModel from "../models/ordermodel.js";  
import userModel from "../models/userModel.js";
import Stripe from 'stripe';

//global variables
const currency = 'inr'
const delivaryCharge = 10

// ✅ Initialize Stripe lazily (only when needed)
let stripe = null;
const getStripe = () => {
    if (!stripe && process.env.STRIPE_KEY) {
        stripe = new Stripe(process.env.STRIPE_KEY);
    }
    return stripe;
};

// placing orders using COD
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save() 

        await userModel.findByIdAndUpdate(userId, {cartData: {}})  // FIXED: use userModel

        res.json({success: true, message: 'Order placed'})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// placing orders using Stripe
const placeOrderStripe = async (req, res) => {
    try {
        const stripeInstance = getStripe();  // ✅ Get Stripe instance here
        
        if (!stripeInstance) {
            return res.json({ success: false, message: 'Stripe is not configured. Please add STRIPE_KEY to environment variables.' });
        }

        const {userId, items, amount, address} = req.body
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save() 

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: delivaryCharge * 100
            },
            quantity: 1
        })
        
        const session = await stripeInstance.checkout.sessions.create({  // ✅ Use stripeInstance
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })
        
        res.json({success: true, session_url: session.url})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const verifyStripe = async(req, res) => {  // FIXED: Added req, res parameters
    const { orderId, success, userId } = req.body;

    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} });
            res.json({ success: true });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// placing orders using Razor Pay
const placeOrderRazorPay = async (req, res) => {
    try {
        // TODO: Implement Razorpay payment logic here
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// All orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//User order data for Frontend
const useOrders = async (req, res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//update order status from admin panel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status updated."})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, useOrders, updateStatus, verifyStripe}