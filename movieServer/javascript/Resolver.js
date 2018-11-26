import {
  getMovieList,
  getMovieDetail,
  getMoviesuggestion
} from "./movie/getMovieData";
import signIn from "./auth/signIn";
import signUp from "./auth/signUp";
const resolvers = {
  Query: {
    getMovies: (_, { rating, limit, page }) =>
      getMovieList({ rating, limit, page }),
    getDetailMovie: (_, { movie_id }) => getMovieDetail({ movie_id }),
    getSuggestionMovie: (_, { movie_id }) => getMoviesuggestion({ movie_id })
  },
  Mutation: {
    signIn: (_, { id, password }) => signIn({ id, password }),
    signUp: (_, { id, password, name, token }) =>
      signUp({ id, password, name, token })
  }
};

export default resolvers;
