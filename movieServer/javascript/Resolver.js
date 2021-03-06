import {
  getMovieList,
  getMovieDetail,
  getMoviesuggestion,
  getReviewData
} from "./movie/getMovieData";
import signIn from "./auth/signIn";
import signUp from "./auth/signUp";
import signUpTokenCheck from "./auth/signUpTokenCheck";
import { addReview } from "./movie/setReview";
const resolvers = {
  Query: {
    getMovies: (_, { rating, limit, page }) =>
      getMovieList({ rating, limit, page }),
    getDetailMovie: (_, { movie_id }) => getMovieDetail({ movie_id }),
    getSuggestionMovie: (_, { movie_id }) => getMoviesuggestion({ movie_id }),
    getTokenCheck: (_, { token }) => signUpTokenCheck({ token }),
    getReviews: (_, { movie_id }) => getReviewData({ movie_id })
  },
  Mutation: {
    signIn: (_, { id, password }) => signIn({ id, password }),
    signUp: (_, { id, password, name, token, salt }) =>
      signUp({ id, password, name, token, salt }),
    addReview: (_, { movieId, text, token }) =>
      addReview({ movieId, text, token })
  }
};

export default resolvers;
