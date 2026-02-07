import express from 'express'
import { createCodOrder, createOnlineOrder, getKey, getOrders, paymentVerification } from '../controllers/order.controller.js';
import { verifyAuth } from '../middleware/verifyAuth.middleware.js';
const router = express.Router();


router.post('/cod', verifyAuth, createCodOrder)
router.post('/online', verifyAuth, createOnlineOrder)
router.get('/getkey', getKey)
router.post('/payment-verification', paymentVerification)
router.get('/', verifyAuth, getOrders)


export default router