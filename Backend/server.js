import dotenv from 'dotenv';
dotenv.config();

// 🔍 Debug environment variables
console.log('🔍 Environment Check:');
console.log('STRIPE_KEY exists:', !!process.env.STRIPE_KEY);
console.log('STRIPE_KEY starts with sk_:', process.env.STRIPE_KEY?.startsWith('sk_'));
console.log('First 20 chars:', process.env.STRIPE_KEY?.substring(0, 20));

import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// API endpoints
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start server
const startServer = async () => {
    await connectDB();
    app.listen(port, () => console.log(`Server started on PORT ${port}`));
};

startServer();