import Product from "../models/product.model.js";

// CREATE
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product Added Successfully", product });
    } catch (error) {
        res.status(400).json({ message: "Error in Creating Product" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ message: "Products Fetched successfully", products })
    } catch (error) {
        res.status(500).json({ message: "Error Occuring in All Products Fetching" })

    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
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