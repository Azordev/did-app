import gql from 'graphql-tag';
import { eventInfo } from '../fragments';

export const EVENTS = gql`
  ${eventInfo}
  query GetEventsForHome($limit: Int = 4, $name: String = "%%") {
    events(
      order_by: { date: asc }
      limit: $limit
      where: { is_active: { _eq: true }, title: { _ilike: $name } }
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
