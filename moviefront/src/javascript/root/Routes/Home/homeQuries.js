import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query getMovies($rating: Float!, $limit: Int!, $page: Int!) {
    getMovies(rating: $rating, limit: $limit, page: $page) {
      title
      rating
      id
      medium_cover_image
    }
  }
`;
