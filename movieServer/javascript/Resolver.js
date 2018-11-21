import {
  getMovieList,
  getMovieDetail,
  getMoviesuggestion
} from "./movie/getMovieData";
import { login } from "./login/login";
const resolvers = {
  Query: {
    getMovies: (_, { rating, limit }) => getMovieList({ rating, limit }),
    getDetailMovie: (_, { movie_id }) => getMovieDetail({ movie_id }),
    getSuggestionMovie: (_, { movie_id }) => getMoviesuggestion({ movie_id })
  },
  Mutation: {
    login: (_, { id, password }) => login({ id, password })
  }
};

export default resolvers;
