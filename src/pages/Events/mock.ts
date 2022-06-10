import { Event } from '../../utils';
import DIDLogo from '../../assets/logos/didperu.svg';

export const events: Event[] = [
  {
    __typename: 'events',
    id: '1',
    date: '02/05/2023',
    title: 'Reunion Privada',
    image_url: DIDLogo,
    type: 'PRIVATE',
  },
  {
    __typename: 'events',
    id: '2',
    date: '02/06/2023',
    title: 'Reunion Publica',
    image_url: DIDLogo,
    type: 'PUBLIC',
  },
  {
    __typename: 'events',
    id: '3',
    date: '02/08/2023',
    title: 'Reunion de trabajo',
    image_url: DIDLogo,
    type: 'PUBLIC',
  },
  {
    __typename: 'events',
    id: '4',
    date: '02/10/2023',
    title: 'Reunion',
    image_url: DIDLogo,
    type: 'PRIVATE',
  },
];
