import gql from 'graphql-tag';

export const userInfo = gql`
  fragment userInfo on users {
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
