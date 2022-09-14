import gql from 'graphql-tag';
import { EventInfo } from '../fragments';

export const EVENTS = gql`
  ${EventInfo}
  query GetEventsList($limit: Int, $name: String = "%%") {
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
  query GetEventById($event_id: uuid!, $member_id: uuid = "") {
    events_by_pk(id: $event_id) {
      ...EventsFragment
      inscriptions(
        where: { member_id: { _eq: $member_id }, event_id: { _eq: $event_id } }
      ) {
        id
      }
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

export const EVENTS_BY_MEMBER_AND_DAY = gql`
  query EventsByMemberAndDay(
    $from_date: timestamptz
    $to_date: timestamptz
    $member_id: uuid = ""
  ) {
    events(
      where: {
        date: { _gte: $from_date, _lt: $to_date }
        inscriptions: { member_id: { _eq: $member_id } }
      }
    ) {
      id
      date
      title
    }
  }
`;
