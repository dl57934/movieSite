import gql from "graphql-tag";
import { BASIC_MOVIE_FRAGMENT } from "../../fragment";

export const DETAIL_PAGE = id => gql`{
    getSuggestionMovie(movie_id:${id}){
      ...NoteParts
      medium_cover_image
    },
    getDetailMovie(movie_id:${id}){
      ...NoteParts
      torrents{
        url
        quality
        size
      }
      description_full
      genres
    },
    getReviews(movie_id:${id}){
      text
      movieId
      birth
    }
    
  }
  ${BASIC_MOVIE_FRAGMENT}
  `;

export const ADD_REVIEW = gql`
  mutation addReview($text: String!, $token: String!, $movieId: String!) {
    addReview(token: $token, text: $text, movieId: $movieId)
  }
`;
