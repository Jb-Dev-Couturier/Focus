import express from 'express';
import UserModel from '../models/userModel.js';
const router = express.Router();
import multer from 'multer';


//upload image Profil
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `../front/public/uploads/profil/`);
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name + '.jpg');
  },
});
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      {
        $set: {
          profilePicture: './uploads/profil/' + (req.body.name + '.jpg'),
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).then((data) => res.send(data));
  } catch (error) {
    res.status(500).send({ message: err });
  }
});

export default router;
