import {
  getListOfInscriptionsReturnType,
  Inscriptions,
} from './../utils/apollo.types';
import { useQuery } from 'src/utils';
import { logger } from '../utils/logger';

import { USER_INSCRIPTIONS } from 'src/services';

export const userActiveInscriptions = (
  member_id: string,
  from_date: string
) => {
  return new Promise<Inscriptions[]>((resolve, reject) => {
    useQuery<getListOfInscriptionsReturnType>(USER_INSCRIPTIONS, {
      member_id,
      from_date,
    })
      .then(({ inscriptions }) => {
        resolve(inscriptions);
      })
      .catch((err) => {
        logger(err);
        reject(err);
      });
  });
};
