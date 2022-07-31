import { Notify } from 'quasar';
import { USER_LOGIN } from '../services';
import { useQuery, GetUser, User } from '../utils';
import { logger } from '../utils/logger';

export interface userAuthData {
  member_code: string;
  password: string;
}

export const handleUserLogin = ({ member_code, password }: userAuthData) => {
  return new Promise<User>((resolve, reject) => {
    const variables: object = { member_code, password };

    useQuery<GetUser>(USER_LOGIN, variables)
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
