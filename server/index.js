import "./config/env.js";
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import orderRoutes from "./routes/order.route.js";
import uploadRoutes from "./routes/upload.route.js";

const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://oddfinds.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// database connect
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error("MONGO CONNECTION ERROR:", err);
    }
};
connectDB();

// Prevent render from cold start
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.use('/api/product', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});