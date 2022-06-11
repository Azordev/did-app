import gql from 'graphql-tag';

export const EVENTS_QUERY = gql`
  query GetEventsForHome($limit: Int = 4) {
    events(
      order_by: { date: asc }
      where: { is_active: { _eq: true } }
      limit: $limit
    ) {
      id
      title
      image_url
      date
      type
    }
  }
`;

export const EVENT_BY_ID_QUERY = gql`
  query GetEventById($id: uuid!) {
    events(where: { id: { _eq: $id } }) {
      date
      description
      image_url
      invitation_url
      title
      type
      id
    }
  }
`;
