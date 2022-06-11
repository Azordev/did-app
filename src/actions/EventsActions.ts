import { Notify } from 'quasar';
import { EVENTS_QUERY, EVENT_BY_ID_QUERY } from '../services';
import { useQuery, getListOfEventsReturnTypes, Event } from '../utils';

import { logger } from '../utils/logger';

export interface GetListOfEventsForHomeProps {
  limit: number;
}

export const getListOfEventsForHome = (
  variables: GetListOfEventsForHomeProps = {
    limit: 4,
  }
) => {
  return new Promise<Event[]>((resolve, reject) => {
    useQuery<getListOfEventsReturnTypes>(EVENTS_QUERY, variables)
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
    useQuery<getListOfEventsReturnTypes>(EVENT_BY_ID_QUERY, { id })
      .then(({ events }) => {
        if (!events || !events.length) {
          Notify.create({
            message: 'No se encontro el evento',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        resolve(events[0]);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
