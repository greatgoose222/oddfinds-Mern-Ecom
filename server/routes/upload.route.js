import express from "express";
import { getCloudinarySignature } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/cloudinary-signature", getCloudinarySignature);


export default router;
