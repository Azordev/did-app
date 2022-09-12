import { EventByPKReturnTypes } from './../utils/apollo.types';
import { Notify } from 'quasar';
import {
  EVENTS,
  EVENT_BY_ID_QUERY,
  SUBSCRIBE_USER_TO_EVENT,
} from '../services';
import { useQuery, getListOfEventsReturnTypes, Event } from 'src/utils';

import { logger } from '../utils/logger';
import { useMutation } from '@vue/apollo-composable';

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

export const getEventById = (member_id: string, event_id: string) => {
  return new Promise<Event>((resolve, reject) => {
    useQuery<EventByPKReturnTypes>(EVENT_BY_ID_QUERY, { member_id, event_id })
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

export const subscribeUserToEvent = (member_id: string, event_id: string) => {
  return new Promise<string>((resolve, reject) => {
    const { mutate, onDone, onError } = useMutation(SUBSCRIBE_USER_TO_EVENT, {
      variables: {
        member_id: member_id,
        event_id: event_id,
      },
    });

    mutate();

    onDone(({ data }) => {
      resolve(data.insert_inscriptions_one.id);
    });
    onError((error) => {
      reject(error);
    });
  });
};
