import Product from "../models/product.model.js";
import slugify from "slugify";
import { uploadToCloudinary } from "../cloudinary/uploadToCloudinary.js";

// CREATE
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Images required" });
        }

        // Upload images
        const uploadedImages = await Promise.all(
            req.files.map(async (file, index) => {
                const result = await uploadToCloudinary(file.buffer);
                return {
                    url: result.secure_url,
                    order: index,
                    isFeatured: index === 0, // first image featured
                };
            })
        );

        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
            images: uploadedImages,
            slug: slugify(name, { lower: true }),
        });

        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => {
    const { category, limit } = req.query;

    const filter = category ? { category } : {};
    try {
        const products = await Product.find(filter).limit(Number(limit) || 0)
        res.status(200).json({ message: "Products Fetched successfully", products })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in All Products Fetching" })

    }
}



export const getProduct = async (req, res) => {
    try {
        const { slug } = req.params
        const product = await Product.findOne({ slug })
        res.status(200).json({ message: "Product Fetched successfully", product })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in Product Fetching" })

    }
}


export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ message: "Product updated successfully" })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in Product Updating" })

    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        res.status(200).json({ message: "Product Deleted successfully", })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in Product Deleting" })
    }
} 