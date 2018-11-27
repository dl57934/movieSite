import { UserSchema } from "./schema";
import mongoose from "mongoose";

export const UsersModel = mongoose.model("users", UserSchema);
