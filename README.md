# 🛍️ OddFinds -- Production MERN E-Commerce Platform

A full-stack, production-ready eCommerce web application built using the
MERN stack (MongoDB, Express, React, Node.js).

This project powers my live online store and is designed with real-world
architecture, authentication, payment integration, and scalable
structure.

------------------------------------------------------------------------

## 🌐 Live Website

🔗 https://oddfinds.vercel.app/

------------------------------------------------------------------------

## 📌 About The Project

OddFinds is a custom-built eCommerce platform focused on home decor and
kitchen essentials products.

This is a real, deployed, and maintained production application handling
actual users and secure online payments.

The platform is built with scalability, clean architecture, and security
best practices in mind.

------------------------------------------------------------------------

## 🏗 Tech Stack

### Frontend

-   React.js (Vite)
-   React Router DOM
-   Redux Toolkit
-   Tailwind CSS
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   JWT Authentication
-   Bcrypt Password Hashing

### Payment Integration

-   Razorpay Payment Gateway

------------------------------------------------------------------------

## 🔐 Core Features

### 👤 User Features

-   User Registration & Login
-   JWT-based Secure Authentication
-   Browse Products
-   Product Details Page
-   Add to Cart
-   Secure Checkout Flow
-   Razorpay Payment Integration
-   Order Success Page
-   Profile Management
-   Shipping & Refund Policy Pages

### 🛠 Admin Features

-   Add Products
-   Update Products
-   Delete Products
-   Manage Orders
-   Manage Users
-   Role-based Route Protection

------------------------------------------------------------------------

## 🔒 Security Implementation

-   Password hashing using bcrypt
-   JWT token generation and verification
-   Protected API routes
-   Role-based authorization middleware
-   Environment variable configuration
-   Secure payment verification

------------------------------------------------------------------------

## 📂 Project Structure

    oddfinds-mern/
    │
    ├── client/                # React Frontend (Vite)
    │   ├── src/
    │   │   ├── components/
    |   |   |   ├── user/
    │   │   │   └── admin/
    │   │   ├── pages/
    │   │   │   ├── user/
    │   │   │   └── admin/
    │   │   ├── redux/
    │   │   └── App.jsx
    │
    ├── server/                # Express Backend
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── server.js
    │
    └── README.md

------------------------------------------------------------------------

## 🚀 Architecture Overview

The application follows a RESTful API architecture with clear separation
between frontend and backend.

-   Client communicates with backend using secure API calls.
-   Backend handles authentication, authorization, business logic, and
    payment verification.
-   MongoDB stores users, products, and order data.
-   Redux manages global state on the frontend.

------------------------------------------------------------------------

## 🌍 Deployment

The application is deployed in a production environment with proper
environment configuration and secure credentials management.

The architecture supports scalability and future feature expansion.

------------------------------------------------------------------------

## 🧠 What This Project Demonstrates

-   Full-stack application architecture
-   Secure authentication system design
-   Payment gateway integration
-   Role-based authorization
-   Production deployment workflow
-   Real-world debugging and maintenance
-   Clean and scalable folder structure

------------------------------------------------------------------------

## 👨‍💻 Developer

**Mukesh Kumar**\
B.Tech Computer Science\
Full Stack Web Developer\
Founder -- OddFinds

Currently building production-level applications and preparing for product-based company roles.

------------------------------------------------------------------------

## ⭐ If You Like This Project

Please consider giving it a star on GitHub.
