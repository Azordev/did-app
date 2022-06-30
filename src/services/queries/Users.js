import gql from 'graphql-tag';
import { UserInfo } from '../fragments';

export const USER_LOGIN = gql`
  ${UserInfo}
  query GetUserSession($password: String!, $member_code: String!) {
    users(
      where: {
        password: { _eq: $password }
        member_code: { _eq: $member_code }
      }
    ) {
      ...UserInfo
    }
  }
`;

export const USER_BY_ID = gql`
  ${UserInfo}
  query USER_BY_ID($id: uuid = "") {
    users_by_pk(id: $id) {
      ...UserInfo
    }
  }
`;
