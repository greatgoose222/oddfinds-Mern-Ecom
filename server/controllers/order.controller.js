import Orders from "../models/order.model.js";

export const createOrder = async (req, res) => {
    try {
        console.log(req.user)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create order",
        });
    }
};
