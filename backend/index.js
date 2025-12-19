import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ["Content-Type", "Authorization",
        "Cache-Control", "Expires", "Pragma",],             // these 3 not neccary in modern app
    credentials: true
}));

app.use(express.json());
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


app.use('/api/product', productRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});