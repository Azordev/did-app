import gql from 'graphql-tag';
import { userInfo } from '../fragments';

export const USER_LOGIN = gql`
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

export const USER_BY_ID = gql`
  ${userInfo}
  query USER_BY_ID($id: uuid = "") {
    users_by_pk(id: $id) {
      ...userInfo
    }
  }
`;
