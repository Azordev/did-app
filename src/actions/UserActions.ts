import { Notify } from 'quasar';
import { getUserSessionQuery } from '../services';
import { useQuery, GetUsers } from '../utils';
import { logger } from '../utils/logger';

export interface userAuthData {
  user_code: string;
  password: string;
}

export const handleUserLogin = ({ user_code, password }: userAuthData) => {
  return new Promise((resolve, reject) => {
    const variables: object = { user_code, password };

    useQuery<GetUsers>(getUserSessionQuery, variables)
      .then(({ users }) => {
        if (!users || !users.length) {
          Notify.create({
            message: 'Los datos que ingresaste no son correctos',
            type: 'negative',
          });

          reject(null);
          return null;
        }

        Notify.create({
          message: 'Has iniciado sesion exitosamente',
          type: 'positive',
        });

        resolve(users[0]);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
