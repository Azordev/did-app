import { EVENTS } from '../services';
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
