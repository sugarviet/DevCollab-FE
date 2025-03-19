import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;