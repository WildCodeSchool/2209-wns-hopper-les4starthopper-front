import { gql } from "@apollo/client";

export const getUsers = gql`
  query FindAllUsers {
    FindAllUsers {
      id
      email
      password
      role    
    }
  }
`
export const signin = gql`
  mutation($password: String!, $email: String!){
    signin(password: $password, email: $email)
  }
`
export const findUser = gql`
  query($userId: ID!) {
    FindUser(id: $userId) {
      id
      email
      role
    }
  }
`
export const createUser = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      email
      password
    }
  }
`
export const deleteUser = gql`
  mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id  
    }
  }
`
export const deleteUsers = gql`
  mutation {
    deleteUsers {
      id
    }
  }
`
export const updateUser = gql`
  mutation($updateUserData2: UserInput!, $updateUserId: ID!) {
    updateUser(data: $updateUserData2, id: $updateUserId) {
      id
      email
      password
      role
      updated_at
    }
  }
`

export const getMe = gql`
query {
  GetMe {
    id
    email
    role
    username
  }
}
`

