import { Notify } from 'quasar';
import axios from 'axios';
import {
  USER_LOGIN,
  USER_BY_ID,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_AVATAR,
} from '../services';
import { useMutation } from '@vue/apollo-composable';
import { useQuery, Users, User, getUserReturnType } from '../utils';
import { logger } from '../utils/logger';

export interface userAuthData {
  member_code: string;
  password: string;
}

export interface userSignupData {
  first_name: string;
  last_name: string;
  email: string;
  dni: string;
  password: string;
  position?: string;
  type?: string;
}

export interface userMemberData {
  memberCode: string;
  namePartner: string;
  lastnamePartner: string;
  email: string;
  startDate?: string;
  password: string;
  position?: string;
  type?: string;
  isActive: boolean;
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

export const handleUserSignup = async (newUser: userSignupData) => {
  return new Promise<User>((resolve, reject) => {
    const startDate = new Date().toISOString().split('T')[0];
    const url = process.env.NEXT_URL + '/members';
    const memberCode =
      `${newUser.first_name[0]}${newUser.last_name[0]}`.toUpperCase() +
      newUser.dni;
    const member: userMemberData = {
      email: newUser.email,
      password: newUser.password,
      startDate,
      namePartner: newUser.first_name,
      lastnamePartner: newUser.last_name,
      memberCode,
      position: 'Socio',
      type: 'MEMBER',
      isActive: false,
    };
    axios
      .post(url, member)
      .then(({ data }) => {
        Notify.create({
          message:
            'Cuenta registrada exitosamente. Usa el siguiente codigo para iniciar sesión' +
            '<div><strong>' +
            memberCode +
            '</strong></div>',
          type: 'info',
          timeout: 20000,
          html: true,
          position: 'top',
        });
        resolve(data);
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
