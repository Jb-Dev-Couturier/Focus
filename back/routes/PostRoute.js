import express from 'express';
import {
  createPost,
  deletePost,
  likePost,
  updatePost,
  readPost,
  createCommentPost,
  editCommentPost,
  deleteCommentPost,
  unlikePost,
} from '../controllers/PostController.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', readPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

router.put('/like-post/:id', likePost);
router.put('/unlike-post/:id', unlikePost);

//comments routes

router.patch('/comment-post/:id', createCommentPost);
router.patch('/edit-comment-post/:id', editCommentPost);
router.patch('/delete-comment-post/:id', deleteCommentPost);

export default router;
