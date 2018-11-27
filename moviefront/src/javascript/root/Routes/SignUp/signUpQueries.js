import gql from "graphql-tag";

export const SignUp = gql`
  mutation signUp(
    $id: String!
    $password: String!
    $name: String!
    $token: Float!
  ) {
    signUp(id: $id, password: $password, name: $name, token: $token)
  }
`;
