# E-Commerce Website

A full-stack e-commerce web application built with modern JavaScript technologies, featuring a customer-facing storefront, admin panel, and backend API.

🔗 **Live Demo**: [forever-mauve-theta.vercel.app](https://forever-mauve-theta.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This e-commerce platform provides a complete online shopping solution with separate interfaces for customers and administrators. The application includes product browsing, cart management, order processing, and a comprehensive admin dashboard for managing the store.

## ✨ Features

### Customer Features
- 🛍️ Browse products with categories and filters
- 🔍 Search functionality
- 🛒 Shopping cart management
- 💳 Secure checkout process
- 👤 User authentication and profile management
- 📦 Order tracking
- 📱 Responsive design for mobile and desktop

### Admin Features
- 📊 Dashboard with analytics
- 📦 Product management (CRUD operations)
- 🏷️ Category management
- 👥 User management
- 📋 Order management and tracking
- 💰 Sales reports and analytics

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **JavaScript** - Programming language
- **CSS3** - Styling
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (assumed based on common MERN stack)
- **RESTful API** - API architecture

### Deployment
- **Vercel** - Hosting platform

## 📁 Project Structure
```
E-commerce-/
├── Backend/           # Backend API and server
│   ├── controllers/   # Route controllers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── config/        # Configuration files
│
├── frontend/          # Customer-facing application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── public/
│
├── admin/             # Admin dashboard
│   ├── src/
│   │   ├── components/    # Admin components
│   │   ├── pages/         # Admin pages
│   │   └── services/      # Admin API services
│   └── public/
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/aryanathane/E-commerce-.git
   cd E-commerce-
```

2. **Install Backend Dependencies**
```bash
   cd Backend
   npm install
```

3. **Install Frontend Dependencies**
```bash
   cd ../frontend
   npm install
```

4. **Install Admin Dependencies**
```bash
   cd ../admin
   npm install
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `Backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend Configuration

Create a `.env` file in the `frontend` directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Admin Configuration

Create a `.env` file in the `admin` directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 💻 Usage

### Running the Application

1. **Start the Backend Server**
```bash
   cd Backend
   npm start
   # or for development with nodemon
   npm run dev
```

2. **Start the Frontend**
```bash
   cd frontend
   npm start
```

3. **Start the Admin Panel**
```bash
   cd admin
   npm start
```

The applications will be available at:
- Backend API: `http://localhost:5000`
- Frontend: `http://localhost:3000`
- Admin Panel: `http://localhost:3001`

## 📡 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aryan Athane**
- GitHub: [@aryanathane](https://github.com/aryanathane)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by modern e-commerce platforms
- Built with passion for learning and development

---

⭐ If you found this project helpful, please give it a star!

## 📞 Support

For support, email [aryanathane@gmail.com] or open an issue in the GitHub repository.
