import gql from "graphql-tag";

export const SIGNIN = gql`
  mutation signIn($id: String!, $password: String!) {
    signIn(id: $id, password: $password) {
      message
      result
      token
    }
  }
`;
