import gql from 'graphql-tag';

export const getAllUsers = gql`
  query GetUsers {
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
