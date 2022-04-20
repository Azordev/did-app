import { Notify } from 'quasar';
import { getUserSession } from '../services';
import { useQuery } from '../utils/apollo';

export interface userAuthData {
  email: string;
  password: string;
}

export const handleUserLogin = ({ email, password }: userAuthData) => {
  return new Promise((res) => {
    const variables: object = { email, password };

    useQuery(getUserSession, variables).then((result) => {
      const data = result?.data;

      if (!data?.users[0]) {
        Notify.create({
          message: 'Los datos que ingresaste no son correctos',
          type: 'negative',
        });

        return null;
      }

      Notify.create({
        message: 'Has iniciado sesion exitosamente',
        type: 'positive',
      });
      res(data?.users[0]);
    });
  });
};
