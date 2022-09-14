import gql from 'graphql-tag';

export const SUBSCRIBE_USER_TO_EVENT = gql`
  mutation InsertUserInEvent($event_id: uuid!, $member_id: uuid!) {
    insert_inscriptions_one(
      object: { event_id: $event_id, member_id: $member_id }
    ) {
      id
    }
  }
`;

export const UNSUBSCRIBE_USER_TO_EVENT = gql`
  mutation RemoveUserFromEvent($inscription_id: uuid!) {
    delete_inscriptions_by_pk(id: $inscription_id) {
      id
    }
  }
`;
