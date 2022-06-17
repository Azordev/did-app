import gql from 'graphql-tag';

export const eventInfo = gql`
  fragment eventsFragment on events {
    date
    description
    image_url
    invitation_url
    title
    type
    id
  }
`;
