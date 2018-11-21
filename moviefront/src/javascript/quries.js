import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    getMovies(rating: 6.0, limit: 30) {
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

export const LOGIN = ({ id, password }) => gql`{ 
  login(id:${id}, password:${password})
}`;
