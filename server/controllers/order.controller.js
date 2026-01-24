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

export const getOrders = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    try {
        const orders = await Order.find({}).populate("user", "name").skip(skip).limit(Number(limit) || 0)

        const totalProducts = await Order.countDocuments({});
        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({ message: "Orders Fetched successfully", orders, totalPages, currentPage: page })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in orders Fetching" })

    }
}