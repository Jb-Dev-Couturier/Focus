import express from 'express';
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/follow/:id', followUser);
router.put('/unfollow/:id', unfollowUser);

export default router;


