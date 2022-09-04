import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import pkg from 'validator';
const { isEmail } = pkg;

const UserSchema = mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minLength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanished: {
      type: Boolean,
      default: false,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: './uploads/profil/random-user.png',
    },
    coverPicture: {
      type: String,
      default: './uploads/profil/undefined.jpg',
    },
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [],
    },
    following: {
      type: [String],
    },
    likes: {
      type: [String],
    },
  },

  { timestamps: true }
);

UserSchema.plugin(uniqueValidator);
// play function before save into display: 'block',

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
