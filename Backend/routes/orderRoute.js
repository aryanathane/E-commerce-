import express from 'express'
import { placeOrder,placeOrderRazorPay,placeOrderStripe,allOrders,useOrders,updateStatus, verifyStripe } from '../controllers/orderControllers.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';
const orderRouter=express.Router();

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razor',authUser,placeOrderRazorPay)

orderRouter.post('/userorders',authUser,useOrders)

orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;