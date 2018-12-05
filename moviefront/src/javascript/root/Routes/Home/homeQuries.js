import gql from "graphql-tag";
import { BASIC_MOVIE_FRAGMENT } from "../../fragment";

export const HOME_PAGE = gql`
  query getMovies($rating: Float!, $limit: Int!, $page: Int!) {
    getMovies(rating: $rating, limit: $limit, page: $page) {
      ...NoteParts
    }
  }
  ${BASIC_MOVIE_FRAGMENT}
`;
