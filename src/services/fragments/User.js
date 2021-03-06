import gql from 'graphql-tag';

export const UserInfo = gql`
  fragment UserInfo on users {
    member_code
    avatar_url
    member_info {
      first_names
      last_names
      subscriptions {
        expiration
      }
    }
  }
`;
