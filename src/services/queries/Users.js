import gql from 'graphql-tag';
import { userInfo } from '../fragments';

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
  ${userInfo}
  query GetUserSession($password: String!, $user_code: String!) {
    users(
      where: { password: { _eq: $password }, username: { _eq: $user_code } }
    ) {
      ...userInfo
    }
  }
`;

export const getUserByIdQuery = gql`
  ${userInfo}
  query getUsers($id: uuid!) {
    users(where: { is_active: { _eq: true }, id: { _eq: $id } }) {
      ...userInfo
    }
  }
`;
