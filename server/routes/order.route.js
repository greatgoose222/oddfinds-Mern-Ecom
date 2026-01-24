import express from 'express'
import { createOrder, getOrders } from '../controllers/order.controller.js';
import { verifyAuth } from '../middleware/verifyAuth.middleware.js';
const router = express.Router();


router.post('/create', verifyAuth, createOrder)
router.get('/', verifyAuth, getOrders)

export default router