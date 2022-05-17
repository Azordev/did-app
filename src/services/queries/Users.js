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
  query GetUserSession($password: String = "", $user_code: String = "") {
    users(
      where: { password: { _eq: $password }, username: { _eq: $user_code } }
    ) {
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
