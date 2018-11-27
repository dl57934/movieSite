import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
  id: String,
  name: String,
  password: String,
  checkLogin: Boolean,
  token: Number
});
