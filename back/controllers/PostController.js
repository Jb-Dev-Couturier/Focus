import PostModel from '../models/postModel.js';
import UserModel from '../models/userModel.js';

import ObjectID from 'mongoose';


// Reading a post
export const readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log('error to get data' + err);
  }).sort({ createdAt: -1 });
};

// creating a post

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update post
export const updatePost = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log('Update error : ' + err);
    }
  );
};

// delete a post
export const deletePost = (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log('Delete error : ' + err);
  });
};

// like a post
export const likePost = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: { likers: req.body.id },
      },
      { new: true }
    );
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $push: { likes: req.params.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

// unlike a post
export const unlikePost = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true }
    );
    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

// Create Comments Post
export const createCommentPost = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post.comments.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      });
      res.status(200).json('le post est commenter');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//EditCommentsPost
export const editCommentPost = (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  try {
    return PostModel.findById(req.params.id, (err, docs) => {
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );

      if (!theComment) return res.status(404).send('Comment not found');
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//DeleteCommentsPost
export const deleteCommentPost = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};
