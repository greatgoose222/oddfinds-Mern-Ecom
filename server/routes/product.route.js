import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();


router.post("/", upload.array("images", 5), createProduct)
router.get("/", getProducts)
router.get("/:slug", getProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)


export default router;