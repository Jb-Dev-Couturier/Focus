import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { signUpErrors, signInErrors } from '../utils/errors.utils.js';

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWTKEY, {
    expiresIn: maxAge,
  });
};



// Register new user
export const registerUser = async (req, res) => {
  const { pseudo, username, password } = req.body;

    try {
      const user = await UserModel.create({ pseudo, username, password });
      res.status(201).json({ user: user._id });
    } catch (err) {
      const errors = signUpErrors(err);
      res.status(200).send({ errors });
    }
};

// Login User

// Changed
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.login(username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

export const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};