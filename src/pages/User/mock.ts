import { User, UserType } from 'src/utils/apollo.types';

export const user: User = {
  id: '000',
  is_active: true,
  type: UserType.MEMBER,
  __typename: 'users',
  avatar_url: undefined,
  member_code: 'VP00000000',
  member_info: {
    __typename: 'members',
    first_names: 'Ana',
    last_names: 'Maria',
    email: 'xxxx@correo.com',
    subscriptions: [
      {
        __typename: 'subscriptions',
        expiration: '12/01/2022',
      },
    ],
  },
};
