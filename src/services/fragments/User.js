import gql from 'graphql-tag';

export const userInfo = gql`
  fragment userInfo on users {
    avatar_url
    member_information {
      first_names
      last_names
      subscriptions {
        expiration
      }
    }
    username
  }
`;
