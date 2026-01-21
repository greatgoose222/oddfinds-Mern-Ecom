import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const userId = req.user.userId;

        const {
            orderItems,
            address,
            paymentMethod,
            totalAmount,
        } = req.body;

        const paymentStatus =
            paymentMethod === "cod" ? "pending" : "paid";

        const order = await Order.create({
            user: userId,
            orderItems,
            address,
            paymentMethod,
            paymentStatus,
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
            message: "Failed to create order",
        });
    }
};

