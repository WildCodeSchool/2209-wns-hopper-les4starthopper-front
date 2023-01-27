import { gql } from "@apollo/client";

export const getUser = gql`
  query User {
    user {
      id
      email
      password
      role
      created_at
      updated_at
    }
  }
`;
