import { UserSchema, ReviewSchema } from "./schema";
import mongoose from "mongoose";

export const UsersModel = mongoose.model("users", UserSchema);
export const ReviewModel = mongoose.model("review", ReviewSchema);
