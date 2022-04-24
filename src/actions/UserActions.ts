import { Notify } from 'quasar';
import { getUserSessionQuery } from '../services';
import { useQuery } from '../utils/apollo';

export interface userAuthData {
  email: string;
  password: string;
}

export const handleUserLogin = ({ email, password }: userAuthData) => {
  return new Promise((resolve, reject) => {
    const variables: object = { email, password };

    useQuery(getUserSessionQuery, variables)
      .then(({ users }) => {
        if (!users || !users[0]) {
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
        reject(null);
        return null;
      });
  });
};
