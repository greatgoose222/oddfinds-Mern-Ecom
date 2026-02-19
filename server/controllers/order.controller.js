import Order from "../models/order.model.js";
import { razorpay } from "../config/razorpay.js";
import crypto from "crypto";

export const createCodOrder = async (req, res) => {
    try {
        const userId = req.user.userId;

        const {
            orderItems,
            address,
            paymentMethod,
            totalAmount,
        } = req.body;


        const order = await Order.create({
            user: userId,
            orderItems,
            address,
            paymentMethod,
            totalAmount,
        });

        return res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create cod order",
        });
    }
};

export const createOnlineOrder = async (req, res) => {

    try {
        const userId = req.user.userId;
        const {
            orderItems,
            address,
            paymentMethod,
            totalAmount,
        } = req.body;


        const options = {
            amount: totalAmount * 100, // Razorpay needs paise
            currency: "INR",
            receipt: `rcpt_${Date.now()}`
        };


        const rzpOrder = await razorpay.orders.create(options);
        const { id: razorpayOrderId } = rzpOrder


        const order = await Order.create({
            user: userId,
            orderItems,
            address,
            paymentMethod,
            razorpayOrderId,
            totalAmount,
        });



        return res.status(201).json({
            success: true,
            order,
            rzpOrder
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create online order",
        });
    }
};

export const getKey = async (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_KEY_ID
    })
}

export const paymentVerification = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
        // Verify signature part
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");


        if (expectedSignature !== razorpay_signature) {
            await Order.findOneAndUpdate({ razorpayOrderId: razorpay_order_id, paymentStatus: "pending" }, { paymentStatus: "failed" });
            return res.status(400).json({ success: false });
        }
        await Order.findOneAndUpdate({ razorpayOrderId: razorpay_order_id, paymentStatus: "pending" }, {
            paymentStatus: "paid",
            razorpayPaymentId: razorpay_payment_id
        });

        res.status(200).json({ success: true })
    } catch (error) {
        console.error("Payment verification error:", error);
        res.status(500).json({ success: false });
    }
}



export const getOrders = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    try {
        const orders = await Order.find({}).populate("user", "name").sort({ createdAt: -1 }).skip(skip).limit(Number(limit) || 0)

        const totalProducts = await Order.countDocuments({});
        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({ message: "Orders Fetched successfully", orders, totalPages, currentPage: page })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in orders Fetching" })

    }
}


export const getUserOrders = async (req, res) => {
    const userId = req.user.userId;
    try {
        const orders = await Order.find({ user: userId }).sort({ createdAt: -1 })
        console.log(orders)
        res.status(200).json({ message: "Orders Fetched successfully", orders })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in orders Fetching" })

    }
}