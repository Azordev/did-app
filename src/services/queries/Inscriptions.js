import gql from 'graphql-tag';

export const USER_INSCRIPTIONS = gql`
  query userActiveInscriptions($member_id: uuid!, $from_date: timestamptz!) {
    inscriptions(
      where: {
        member_id: { _eq: $member_id }
        event_information: { date: { _gte: $from_date } }
      }
    ) {
      event_information {
        date
      }
    }
  }
`;
