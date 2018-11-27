import gql from "graphql-tag";

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
