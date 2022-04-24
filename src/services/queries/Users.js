import gql from 'graphql-tag';

export const getAllUsersQuery = gql`
  query GetAllUsers {
    users {
      username
      type
      password
      is_active
      id
      created_at
      avatar_url
    }
  }
`;

export const getUserSessionQuery = gql`
  query GetUserSession($password: String = "", $email: String = "") {
    users(where: { password: { _eq: $password }, username: { _eq: $email } }) {
      username
      type
      password
      is_active
      id
      created_at
      avatar_url
    }
  }
`;
