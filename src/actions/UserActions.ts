import { Notify } from 'quasar';
import { USER_LOGIN, USER_BY_ID } from '../services';
import { useQuery, Users, User, getUserReturnType } from '../utils';
import { logger } from '../utils/logger';

export interface userAuthData {
  member_code: string;
  password: string;
}

export const handleUserLogin = ({ member_code, password }: userAuthData) => {
  return new Promise<User>((resolve, reject) => {
    const variables: object = { member_code, password };

    useQuery<Users>(USER_LOGIN, variables)
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

export const getSpecificUser = (id: string) => {
  return new Promise<User>((resolve, reject) => {
    useQuery<getUserReturnType>(USER_BY_ID, { id })
      .then(({ users_by_pk: user }) => {
        if (!user) {
          Notify.create({
            message: 'No se encontro el usuario',
            type: 'negative',
          });

          reject(null);
          return null;
        }
        resolve(user);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};
