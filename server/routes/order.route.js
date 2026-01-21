import express from 'express'
import { createOrder } from '../controllers/order.controller.js';
import { verifyAuth } from '../middleware/verifyAuth.middleware.js';
const router = express.Router();


router.post('/create', verifyAuth, createOrder)

export default router