import express from 'express'
import { login, signup, logout, getMe, saveAddress, removeAddress } from '../controllers/user.controller.js';
import { verifyAuth } from '../middleware/verifyAuth.middleware.js';
const router = express.Router();


router.post('/signup', signup)
router.post('/login', login)
router.get('/logout', logout)
router.get("/me", verifyAuth, getMe);
router.post('/saveaddress', verifyAuth, saveAddress)
router.delete('/removeAddress', verifyAuth, removeAddress)

export default router