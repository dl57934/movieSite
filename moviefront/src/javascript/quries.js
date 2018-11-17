import gql from 'graphql-tag';

export const HOME_PAGE = gql`
{
    getMovies(rating:7, limit:30){
        title
        id
        rating
        medium_cover_image
    }
}
`;