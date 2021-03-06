import { ReviewModel } from "../db/models";
import jwt from "jsonwebtoken";

export const addReview = async ({ movieId, text, token }) => {
  const result = await jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log(decoded);
    }
  });
  console.log(result);
  if (result === undefined) {
    const review = new ReviewModel({
      movieId,
      text,
      token
    });
    review.save();
    return true;
  } else {
    return false;
  }
};
