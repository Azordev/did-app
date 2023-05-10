import gql from 'graphql-tag';

export const UserInfo = gql`
  fragment UserInfo on users {
    id
    member_code
    avatar_url
    is_active
    member_info {
      id
      first_names
      last_names
      email
      subscriptions {
        expiration
      }
    }
  }
`;
