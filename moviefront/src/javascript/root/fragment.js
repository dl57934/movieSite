import gql from "graphql-tag";

export const BASIC_MOVIE_FRAGMENT = gql`
  fragment NoteParts on movie {
    title
    rating
    medium_cover_image
    id
  }
`;
