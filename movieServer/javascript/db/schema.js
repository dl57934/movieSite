import mongoose from "mongoose";
import { UsersModel, ReviewModel } from "./models";

export const UserSchema = mongoose.Schema({
  id: String,
  name: String,
  password: String,
  checkLogin: Boolean,
  token: Number,
  salt: String
});

UserSchema.static("findByToken", (token, callback) => {
  return UsersModel.findOne(
    { token: Number(token), checkLogin: false },
    callback
  );
});

UserSchema.static("findByEmail", async id => {
  return await UsersModel.find({ id });
});

export const ReviewSchema = mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, trim: true, required: true, max: 100 },
  birth: { type: Date, default: Date.now },
  movieId: { type: String, required: true }
});

ReviewSchema.static("findByMovieId", async movieId => {
  return await ReviewModel.find({ movieId });
});
