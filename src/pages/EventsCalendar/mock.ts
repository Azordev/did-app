import { Event, EventType } from '../../utils';
import { getDateFromTimestamptz } from './utils/parseTimestamptz';

export const mock_events: Event[] = [
  {
    __typename: 'events',
    id: '1',
    date: '2022-09-02T02:58:00+00:00',
    title: 'Reunion Privada',
    type: EventType.PRIVATE,
  },
  {
    __typename: 'events',
    id: '2',
    date: '2022-09-04T03:23:00+00:00',
    title: 'Reunion Publica',
    type: EventType.PUBLIC,
  },
  {
    __typename: 'events',
    id: '3',
    date: '2022-09-08T08:20:00+00:00',
    title: 'Como ahorrar si eres socio de DID',
    type: EventType.PUBLIC,
  },
  {
    __typename: 'events',
    id: '3',
    date: '2022-09-08T08:20:00+00:00',
    title: 'Obten descuentos invitando amigos a DID',
    type: EventType.PUBLIC,
  },
  {
    __typename: 'events',
    id: '4',
    date: '2022-09-09T04:50:00+00:00',
    title: 'Como decorar casas mas facilmente',
    type: EventType.PRIVATE,
  },
  {
    __typename: 'events',
    id: '4',
    date: '2022-09-09T04:50:00+00:00',
    title: 'Como conseguir buenas ofertas en DID',
    type: EventType.PRIVATE,
  },
];

export const events_dates: string[] = mock_events.map(
  (event) => getDateFromTimestamptz(event.date).date
);
