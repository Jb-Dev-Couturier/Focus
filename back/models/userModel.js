import mongoose from "mongoose";
import bcrypt from 'bcrypt';
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
    email: {
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

// play function before save into display: 'block',
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

UserSchema.plugin(uniqueValidator);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
