import UserModel from '../models/userModel.js';
import { signUpErrors, signInErrors } from '../utils/errors.utils.js';
import bcrypt from 'bcrypt';

//enregistrements nouvelle utilisateur
export const registerUser = async (req, res) => {
  const { pseudo, email, password } = req.body;
  //salt est la quatite de hachage de chaine de donnée
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({ pseudo, email, password: hashedPass });

  try {
    await newUser.save();
    res.status(201).json({ user: newUser._id });
  } catch (error) {
    const errors = signUpErrors(error);
    res.status(200).send({ errors });
  }
};

//connection utilisateur
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    res.status(200).json({ user });
  } catch (error) {
    const errors = signInErrors(error);
    res.status(200).json({ errors });
  }
};
