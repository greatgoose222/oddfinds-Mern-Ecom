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
        sellingPrice: {
            type: Number,
            required: true,
        },
        images: {
            featured: {
                url: String,
                public_id: String
            },
            gallery: [
                {
                    url: String,
                    public_id: String,
                    order: Number
                }
            ]
        },
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
