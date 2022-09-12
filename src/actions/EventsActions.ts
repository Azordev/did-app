import { EventByPKReturnTypes } from 'src/utils/apollo.types';
import { Notify } from 'quasar';
import { EVENTS, EVENT_BY_ID_QUERY } from '../services';
import { useQuery, getListOfEventsReturnTypes, Event } from '../utils';

import { logger } from '../utils/logger';

export interface GetListOfEventsForHomeProps {
  limit: number;
}

const HOME_EVENTS_LIMIT = 4;

export const getListOfEventsForHome = (
  variables: GetListOfEventsForHomeProps = {
    limit: HOME_EVENTS_LIMIT,
  }
) => {
  return new Promise<Event[]>((resolve, reject) => {
    useQuery<getListOfEventsReturnTypes>(EVENTS, variables)
      .then(({ events }) => {
        resolve(events);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};

export const getListOfEvents = (name = '') => {
  const variables = {
    name: `%${name}%`,
  };

  return new Promise<Event[]>((resolve, reject) => {
    useQuery<getListOfEventsReturnTypes>(EVENTS, variables)
      .then(({ events }) => {
        resolve(events);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};

export const getEventById = (id: string) => {
  return new Promise<Event>((resolve, reject) => {
    useQuery<EventByPKReturnTypes>(EVENT_BY_ID_QUERY, { id })
      .then(({ events_by_pk: event }) => {
        if (!event) {
          Notify.create({
            message: 'No se encontro el evento',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(event);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
