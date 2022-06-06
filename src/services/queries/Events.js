import gql from 'graphql-tag';

export const GetEventsForHomeQuery = gql`
  query GetEventsForHome {
    events(order_by: { date: asc }, where: { is_active: { _eq: true } }) {
      title
      image_url
      date
    }
  }
`;
