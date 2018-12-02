import gql from "graphql-tag";

export const SignUp = gql`
  mutation signUp(
    $id: String!
    $password: String!
    $name: String!
    $token: Int!
    $salt: String!
  ) {
    signUp(
      id: $id
      password: $password
      name: $name
      token: $token
      salt: $salt
    ) {
      message
      result
    }
  }
`;
