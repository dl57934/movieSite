import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
  id: String,
  name: String,
  password: String,
  checkLogin: Boolean,
  token: Number,
  salt: String
});

export const ReviewSchema = mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, trim: true, required: true, max: 100 },
  likeNum: { type: Number, required: true },
  birth: { type: Date, default: Date.now }
});
