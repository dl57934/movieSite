import gql from "graphql-tag";

export const SignUp = gql`
  mutation signUp(
    $id: String!
    $password: String!
    $name: String!
    $token: Int!
  ) {
    signUp(id: $id, password: $password, name: $name, token: $token) {
      message
      result
    }
  }
`;
