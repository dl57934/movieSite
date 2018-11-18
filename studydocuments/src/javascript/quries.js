import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        getMovies(rating:7.0, limit:30){
            title
            medium_cover_image
            rating
            id
        }
    }
`;

export const DETAIL_PAGE = (movieId) => gql`
    {
        getDetailMovie(movie_id:${movieId}){
            title
            id
            rating
            medium_cover_image
        }
    }
`;