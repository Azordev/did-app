import { Event, EventType } from '../../utils';

export const events: Event[] = [
  {
    __typename: 'events',
    id: '1',
    date: '02/05/2023',
    title: 'Reunion Privada',
    type: EventType.PRIVATE,
  },
  {
    __typename: 'events',
    id: '2',
    date: '02/06/2023',
    title: 'Reunion Publica',
    type: EventType.PUBLIC,
  },
  {
    __typename: 'events',
    id: '3',
    date: '02/08/2023',
    title: 'Reunion de trabajo',
    type: EventType.PUBLIC,
  },
  {
    __typename: 'events',
    id: '4',
    date: '02/10/2023',
    title: 'Reunion',
    type: EventType.PRIVATE,
  },
];
