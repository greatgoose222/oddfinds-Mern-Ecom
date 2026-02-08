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

    address: {
        pincode: { type: String, trim: true },
        fullName: { type: String, trim: true },
        phone: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        addressLine: { type: String, trim: true },
        country: {
            type: String,
        },
    },

    paymentMethod: {
        type: String,
        enum: ["cod", "online"],
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,

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
        default: "pending"
    }

}, { timestamps: true });


const Order = mongoose.model("Order", orderSchema);
export default Order;