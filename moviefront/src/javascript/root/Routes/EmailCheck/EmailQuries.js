import gql from "graphql-tag";

export const EMAIL_CHECK = gql`
  query getTokenCheck($token: Int!) {
    getTokenCheck(token: $token)
  }
`;
