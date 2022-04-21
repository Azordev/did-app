import { Notify } from 'quasar';
import { getUserSessionQuery } from '../services';
import { useQuery } from '../utils/apollo';

export interface userAuthData {
  email: string;
  password: string;
}

export const handleUserLogin = ({ email, password }: userAuthData) => {
  return new Promise((res, rej) => {
    const variables: object = { email, password };

    useQuery(getUserSessionQuery, variables)
      .then((result) => {
        if (!result || !result?.users[0]) {
          Notify.create({
            message: 'Los datos que ingresaste no son correctos',
            type: 'negative',
          });

          rej(null);
          return null;
        }

        Notify.create({
          message: 'Has iniciado sesion exitosamente',
          type: 'positive',
        });

        res(result.users[0]);
      })
      .catch((err) => {
        rej(null);
        return null;
      });
  });
};
