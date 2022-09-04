import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTKEY, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWTKEY, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json('no token');
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log('No token');
  }
};
