import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        images: [
            {
                url: {
                    type: String,
                    required: true
                },
                order: {
                    type: Number,
                    default: 0
                },
                isFeatured: {
                    type: Boolean,
                    default: false
                }
            }
        ],
        category: {
            type: String,
        },
        stock: {
            type: Number,
            default: 0,
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
