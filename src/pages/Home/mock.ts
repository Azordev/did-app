export type Subscriptions = {
  __typename: 'subscriptions';
  expiration: string;
};

export type MemberInformation = {
  __typename: 'members';
  first_names: string;
  last_names: string;
  subscriptions: Subscriptions[];
};

export type UserType = {
  __typename: 'users';
  avatar_url: string | null;
  username: string;
  member_info: MemberInformation[];
};

export const user = {
  __typename: 'users',
  avatar_url: null,
  username: 'VP00000000',
  member_info: [
    {
      __typename: 'members',
      first_names: 'Victor',
      last_names: 'Colmenarez',
      subscriptions: [
        {
          __typename: 'subscriptions',
          expiration: '12/01/2022',
        },
      ],
    },
  ],
};
