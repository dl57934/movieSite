import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        getMovies(rating:6.0, limit:30){
            title
            id
            rating 
            genres
            description_full
        }
    }
`;

       