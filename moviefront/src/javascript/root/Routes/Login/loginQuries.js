import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($id: String!, $password: String!) {
    login(id: $id, password: $password)
  }
`;
