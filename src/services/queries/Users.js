import gql from 'graphql-tag';
import { userInfo } from '../fragments';

export const USERS_QUERY = gql`
  query GetAllUsers {
    users {
      member_code
      type
      password
      is_active
      id
      created_at
      avatar_url
    }
  }
`;

export const USER_LOGIN_QUERY = gql`
  ${userInfo}
  query GetUserSession($password: String!, $member_code: String!) {
    users(
      where: {
        password: { _eq: $password }
        member_code: { _eq: $member_code }
      }
    ) {
      ...userInfo
    }
  }
`;

export const USER_BY_ID_QUERY = gql`
  ${userInfo}
  query getUsers($id: uuid!) {
    users(where: { is_active: { _eq: true }, id: { _eq: $id } }) {
      ...userInfo
    }
  }
`;
