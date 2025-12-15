import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express()
const port = process.env.PORT

// middleware
app.use(express.json());

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