import gql from 'graphql-tag';
import { eventInfo } from '../fragments';

export const EVENTS = gql`
  ${eventInfo}
  query GetEventsForHome($limit: Int = 4) {
    events(
      order_by: { date: asc }
      where: { is_active: { _eq: true } }
      limit: $limit
    ) {
      ...eventsFragment
    }
  }
`;

export const EVENT_BY_ID_QUERY = gql`
  ${eventInfo}
  query GetEventById($id: uuid!) {
    events_by_pk(id: $id) {
      ...eventsFragment
    }
  }
`;
