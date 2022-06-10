import { EVENTS_QUERY } from '../services';
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
