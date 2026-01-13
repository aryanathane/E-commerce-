# E-Commerce Website

A full-stack e-commerce application with separate backend, admin panel, and customer frontend. Built with modern web technologies including Node.js, MongoDB, and React.

🔗 **Live Demo**: [forever-mauve-theta.vercel.app](https://forever-mauve-theta.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Frontend
- Browse products with categories and filters
- Product search functionality
- Shopping cart management
- User authentication and profile management
- Secure checkout with Stripe payment integration
- Order history and tracking
- Responsive design for mobile and desktop

### Admin Panel
- Product management (CRUD operations)
- Category management
- Order management and status updates
- User management
- Dashboard with analytics
- Image upload with Cloudinary integration
- Inventory tracking

### Backend API
- RESTful API architecture
- JWT-based authentication
- Secure password hashing
- MongoDB database integration
- Cloudinary integration for image storage
- Stripe payment processing
- Order management system

## 🛠 Tech Stack

**Frontend:**
- React.js
- JavaScript
- HTML5/CSS3
- Responsive Design

**Backend:**
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)

**Authentication & Security:**
- JWT (JSON Web Tokens)
- Bcrypt (Password hashing)

**Payment Processing:**
- Stripe API

**Cloud Services:**
- Cloudinary (Image storage and management)
- Vercel (Deployment)

## 📁 Project Structure

```
E-commerce/
├── Backend/          # Node.js/Express backend API
├── admin/            # Admin panel (React)
├── frontend/         # Customer-facing website (React)
├── .gitignore
└── Readme.md
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- Stripe account (for payment processing)
- Cloudinary account (for image management)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/aryanathane/E-commerce-.git
cd E-commerce-
```

### 2. Install Backend Dependencies
```bash
cd Backend
npm install
```

### 3. Install Admin Panel Dependencies
```bash
cd ../admin
npm install
```

### 4. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the **Backend** directory with the following variables:

```env
# Stripe Configuration
STRIPE_KEY=your_stripe_secret_key_here

# MongoDB Configuration
MONGODB_URL=your_mongodb_connection_string_here

# Server Configuration
PORT=5000

# Cloudinary Configuration
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key_here
CLOUDINARY_NAME=your_cloudinary_cloud_name_here

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_admin_password_here
```

### How to Get API Keys:

**Stripe:**
1. Sign up at [stripe.com](https://stripe.com)
2. Navigate to Developers → API Keys
3. Copy your Secret Key

**MongoDB:**
1. Create account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string from "Connect" button

**Cloudinary:**
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Go to Dashboard
3. Copy Cloud Name, API Key, and API Secret

## 🏃 Running the Application

### Start Backend Server
```bash
cd Backend
npm start
# or for development with auto-reload
npm run dev
```
Backend will run on `http://localhost:5000`

### Start Admin Panel
```bash
cd admin
npm start
```
Admin panel will run on `http://localhost:3000`

### Start Frontend
```bash
cd frontend
npm start
```
Frontend will run on `http://localhost:3001`

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (Protected)

### Product Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Order Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id` - Update order status (Admin only)

### Payment Endpoints
- `POST /api/payment/create-payment-intent` - Create Stripe payment intent
- `POST /api/payment/webhook` - Stripe webhook handler

## 🌐 Deployment

### Backend (Vercel)
1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to Backend folder
3. Run `vercel` and follow prompts
4. Add environment variables in Vercel dashboard

### Frontend & Admin (Vercel/Netlify)
1. Build the production version: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Update API endpoints to production URLs

## 📝 Usage

### Admin Access
1. Navigate to the admin panel
2. Login with admin credentials from `.env`
3. Manage products, orders, and users

### Customer Flow
1. Browse products on the frontend
2. Add items to cart
3. Proceed to checkout
4. Complete payment with Stripe
5. View order confirmation

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Aryan Athane**
- GitHub: [@aryanathane](https://github.com/aryanathane)

## 🙏 Acknowledgments

- Stripe for payment processing
- Cloudinary for image management
- MongoDB for database
- All contributors and supporters

## 📞 Support

For support, email aryanathane@gmail.com or open an issue in the repository.

---

⭐ If you find this project helpful, please give it a star!
