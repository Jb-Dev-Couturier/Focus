import express from 'express'
import { passwordCheck } from '../middleware/passwordCheck.js';
import { emailCheck } from '../middleware/emailCheck.js';
import {
  loginUser,
  registerUser,
} from '../controllers/authControllers.js';
const router = express.Router()


router.post('/register', emailCheck, passwordCheck, registerUser);
router.post('/login', loginUser);
export default router