import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

import ObjectID from 'mongoose';

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a User
export const getUser = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json('No such User');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//updateUser
export const updateUser = async (req, res) => {
  if (!ObjectID.isValidObjectId(req.params.id))
    return res.status(400).send('ID unknow:' + req.params.id);
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  else{
    res.status(403).json("Accés interdit, mettez simplement VOTRE profil a jour")
  }
};
