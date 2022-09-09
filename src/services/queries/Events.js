import gql from 'graphql-tag';
import { EventInfo } from '../fragments';

export const EVENTS = gql`
  ${EventInfo}
  query GetEventsForHome($limit: Int = 4, $name: String = "%%") {
    events(
      order_by: { date: asc }
      limit: $limit
      where: { is_active: { _eq: true }, title: { _ilike: $name } }
    ) {
      ...EventsFragment
    }
  }
`;

export const EVENT_BY_ID_QUERY = gql`
  ${EventInfo}
  query GetEventById($id: uuid!) {
    events_by_pk(id: $id) {
      ...EventsFragment
    }
  }
`;

export const EVENTS_BY_USER_QUERY = gql`
  query GetEventsByUser($userId: uuid!) {
    events(
      distinct_on: date
      where: { inscriptions: { member_id: { _eq: $userId } } }
    ) {
      date
    }
  }
`;

export const EVENTS_BY_USER_AND_DAY = gql`
  query getEventsByUserAndDay($date: timestamptz!, $userId: uuid!) {
    events(
      distinct_on: date
      where: {
        inscriptions: { member_id: { _eq: $userId } }
        date: { _gte: $date }
      }
    ) {
      date
    }
  }
`;
