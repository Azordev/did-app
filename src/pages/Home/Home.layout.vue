<template>
  <home-header
    :expirationDate="expirationDate"
    :firstName="firstName"
    :lastName="lastName"
    :userCode="userCode"
    :isMembershipActive="isMembershipActive"
    :avatar="avatar"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { MemberInformation, UserType } from './mock';
import { HomeHeader } from './components';
import { Event } from '../../utils';

const handleUserData = () => {
  const getExpirationDate = (expiration: string) => {
    const expirationDate = ref<Date>(new Date('01/01/1999'));
    const isMembershipActive = ref<boolean>(false);

    const _currentDate = new Date();

    const _expirationString = expiration;

    if (_expirationString) {
      expirationDate.value = new Date(_expirationString);
    }

    isMembershipActive.value =
      _currentDate.getTime() < expirationDate.value.getTime();

    return { expirationDate, isMembershipActive };
  };

  const getUserName = (memberInformation: MemberInformation) => {
    const firstName = ref<string>('');
    const lastName = ref<string>('');

    const { first_names } = memberInformation;
    const { last_names } = memberInformation;

    firstName.value = first_names.split(' ')[0];
    lastName.value = last_names.split(' ')[0];

    return {
      firstName,
      lastName,
    };
  };

  const getUserMemberCode = (username: string) => {
    const userCode = ref<string>(username);

    return { userCode };
  };

  const parseUserData = (user: UserType) => ({
    ...getExpirationDate(
      user.member_information[0].subscriptions[0].expiration
    ),
    ...getUserName(user.member_information[0]),
    ...getUserMemberCode(user.username),
    avatar: user.avatar_url,
  });

  return { parseUserData };
};

export default defineComponent({
  name: 'HomeLayout',
  components: {
    HomeHeader,
  },
  props: {
    user: {
      type: Object as PropType<UserType>,
      default: () => ({}),
    },
    events: {
      type: Array as PropType<Event[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { parseUserData } = handleUserData();

    return {
      ...parseUserData(props.user),
    };
  },
});
</script>
