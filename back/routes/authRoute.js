import express from 'express';
import { loginUser, registerUser,logout } from '../controllers/AuthController.js';

const router = express.Router()


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logout);

export default router