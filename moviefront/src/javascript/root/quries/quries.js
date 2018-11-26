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

export const DETAIL_PAGE = id => gql`{
  getSuggestionMovie(movie_id:${id}){
    title
    rating
    id
    medium_cover_image
  },
  getDetailMovie(movie_id:${id}){
    title
    rating
    medium_cover_image
    torrents{
      url
      quality
      size
    }
    description_full
    genres
  }
}
`;

export const LOGIN = gql`
  mutation login($id: String!, $password: String!) {
    login(id: $id, password: $password)
  }
`;
