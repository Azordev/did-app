import gql from 'graphql-tag';

export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUserPassword($password: String!, $id: uuid!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { password: $password }) {
      id
    }
  }
`;

export const UPDATE_USER_AVATAR = gql`
  mutation UpdateUserAvatar($avatar: String!, $id: uuid!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { avatar_url: $avatar }) {
      avatar_url
    }
  }
`;
