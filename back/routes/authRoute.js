import express from 'express'
import {
  loginUser,
  registerUser,
} from '../controllers/authControllers.js';
import  {passwordCheck } from '../middleware/passwordCheck.js'
import  {emailCheck}  from '../middleware/emailCheck.js'
const router = express.Router()


router.post('/register',emailCheck, passwordCheck,registerUser);
router.post('/login', loginUser);
export default router