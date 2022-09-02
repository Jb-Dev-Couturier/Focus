import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';


const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',  updateUser);
router.delete('/:id',  deleteUser);
router.put('/follow/:id',  followUser);
router.put('/unfollow/:id',  unfollowUser);

export default router