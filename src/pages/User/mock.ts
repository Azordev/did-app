import { getUserbyId } from './utils/getUserById';

const userById = await getUserbyId();

export type Subscriptions = {
  __typename: 'subscriptions';
  expiration: string;
};

export type MemberInformation = {
  __typename: 'members';
  first_names: string;
  last_names: string;
  email: string;
  subscriptions: Subscriptions[];
};

export type UserType = {
  __typename: string;
  avatar_url?: string;
  member_code: string;
  member_info: MemberInformation[];
};

export const user: UserType = {
  __typename: 'users',
  avatar_url: undefined,
  member_code: userById.user.value?.member_code || 'VP00000000',
  member_info: [
    {
      __typename: 'members',
      first_names: userById.user.value?.member_info.first_names || 'Ana',
      last_names: userById.user.value?.member_info.last_names || 'Ana',
      email: userById.user.value?.member_info.email || 'xxxx@correo.com',
      subscriptions: [
        {
          __typename: 'subscriptions',
          expiration: '12/01/2022',
        },
      ],
    },
  ],
};
