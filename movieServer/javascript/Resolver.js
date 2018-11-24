import {
  getMovieList,
  getMovieDetail,
  getMoviesuggestion
} from "./movie/getMovieData";
import { signIn, signUp } from "./login/login";
const resolvers = {
  Query: {
    getMovies: (_, { rating, limit }) => getMovieList({ rating, limit }),
    getDetailMovie: (_, { movie_id }) => getMovieDetail({ movie_id }),
    getSuggestionMovie: (_, { movie_id }) => getMoviesuggestion({ movie_id })
  },
  Mutation: {
    signIn: (_, { id, password }) => signIn({ id, password }),
    signUp: _ => signUp()
  }
};

export default resolvers;
