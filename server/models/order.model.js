import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],

    shippingAddress: {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true }
    },

    paymentMethod: {
        type: String,
        enum: ["COD", "ONLINE"],
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },

    paymentId: String,
    gatewayOrderId: String,

    itemsPrice: {
        type: Number,
        required: true
    },
    shippingPrice: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    totalAmount: {
        type: Number,
        required: true
    },

    orderStatus: {
        type: String,
        default: "placed"
    }

}, { timestamps: true });


const Orders = mongoose.model("Order", orderSchema);
export default Orders;