import { Notify } from 'quasar';
import {
  USER_LOGIN,
  USER_BY_ID,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_AVATAR,
} from '../services';
import { useMutation } from '@vue/apollo-composable';
import { useQuery, Users, User, getUserReturnType } from '../utils';
import { logger } from '../utils/logger';
import axios from 'axios';

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
        }
        resolve(user);
      })
      .catch((err) => {
        logger(err);
        reject(null);
      });
  });
};

export const updateUserPassword = (userId: string, newPassword: string) => {
  return new Promise<void>((resolve, reject) => {
    const { mutate, onDone, onError } = useMutation(UPDATE_USER_PASSWORD, {
      variables: {
        id: userId,
        password: newPassword,
      },
    });

    mutate();

    onDone(() => resolve());
    onError((error) => {
      reject(error);
    });
  });
};

export const uploadUserAvatar = async (authId: string, newAvatar: string) => {
  return new Promise<void>((resolve, reject) => {
    const { mutate, onDone, onError } = useMutation(UPDATE_USER_AVATAR, {
      variables: {
        id: authId,
        avatar: newAvatar,
      },
    });

    mutate();

    onDone(() => resolve());
    onError((error) => {
      reject(error);
    });
  });
};
