import gql from 'graphql-tag';

export const GetEventsForHomeQuery = gql`
  query GetEventsForHome {
    events(order_by: { date: asc }, where: { is_active: { _eq: true } }) {
      id
      title
      image_url
      date
      type
    }
  }
`;
