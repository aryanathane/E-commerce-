# E-Commerce Website

A full-stack e-commerce application with separate backend, admin panel, and customer frontend. Built with modern web technologies for seamless online shopping experience.

🔗 **Live Demo**: [forever-mauve-theta.vercel](forever-mauve-theta.vercel.app)

## ✨ Features

- 🛍️ Browse products with categories and filters
- 🔍 Product search functionality
- 🛒 Shopping cart management
- 👤 User authentication and profiles
- 💳 Secure checkout with Stripe
- 📦 Order tracking and history
- 📊 Admin dashboard for complete management
- 📱 Responsive design

## 🛠 Tech Stack

**Frontend:** React.js, HTML5/CSS3

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Services:** JWT (Auth), Stripe (Payments), Cloudinary (Images)

## 📦 Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/aryanathane/E-commerce-.git
cd E-commerce-

# Install backend
cd Backend
npm install

# Install admin panel
cd ../admin
npm install

# Install frontend
cd ../frontend
npm install
```

### 2. Environment Setup

Create `.env` file in **Backend** directory:

```env
STRIPE_KEY=your_stripe_secret_key
MONGODB_URL=your_mongodb_connection_string
PORT=5000
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_admin_password
```

### 3. Get API Keys

**Stripe** - [stripe.com](https://stripe.com) (Payment processing)

**MongoDB** - [mongodb.com](https://www.mongodb.com/cloud/atlas) (Database)

**Cloudinary** - [cloudinary.com](https://cloudinary.com) (Image storage)

### 4. Run the Application

**Backend:**
```bash
cd Backend
npm start
```

**Admin Panel:**
```bash
cd admin
npm start
```

**Frontend:**
```bash
cd frontend
npm start
```

Backend: `http://localhost:5000`  
Admin: `http://localhost:3000`  
Frontend: `http://localhost:3001`

## 📁 Project Structure

```
E-commerce/
├── Backend/        # Node.js/Express API
├── admin/          # Admin dashboard (React)
├── frontend/       # Customer website (React)
└── README.md
```

## 🔑 Key Features

### Customer Experience
- Product browsing with advanced filters
- Secure user authentication with JWT
- Real-time cart updates
- Stripe payment integration
- Order confirmation emails

### Admin Panel
- Product management (CRUD operations)
- Category management
- Order management and status updates
- User management
- Revenue analytics
- Cloudinary image uploads

### Backend API
- RESTful architecture
- Secure password hashing
- JWT authentication
- MongoDB integration
- Payment processing

## 🌐 Deployment

Deployed on Vercel. For your own deployment:

```bash
# Build and deploy
vercel
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.


## 👤 Author

**Aryan Athane**  
GitHub: [@aryanathane](https://github.com/aryanathane)

---

⭐ If you find this project helpful, please give it a star!
