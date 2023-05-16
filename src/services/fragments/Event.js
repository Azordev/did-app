import gql from 'graphql-tag';

export const EventInfo = gql`
  fragment EventsFragment on events {
    date
    description
    image_url
    invitation_url
    requirements_url
    title
    type
    id
  }
`;
