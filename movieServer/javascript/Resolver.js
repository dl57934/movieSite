import {
  getMovieList,
  getMovieDetail,
  getMoviesuggestion
} from "./movie/getMovieData";
import signIn from "./auth/signIn";
import signUp from "./auth/signUp";
const resolvers = {
  Query: {
    getMovies: (_, { rating, limit }) => getMovieList({ rating, limit }),
    getDetailMovie: (_, { movie_id }) => getMovieDetail({ movie_id }),
    getSuggestionMovie: (_, { movie_id }) => getMoviesuggestion({ movie_id })
  },
  Mutation: {
    signIn: (_, { id, password }) => signIn({ id, password }),
    signUp: (_, { id, password, name, token }) =>
      signUp({ id, password, name, token }),
    addMovies: (_, { rating, limit }) => getMovieList({ rating, limit })
  }
};

export default resolvers;
