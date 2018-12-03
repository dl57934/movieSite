import { ReviewModel } from "../db/models";

export const addReview = ({ movieId, text, token }) => {
  console.log(movieId, text, token);
  const review = new ReviewModel({
    movieId,
    text,
    token
  });
  review.save();
  return true;
};
