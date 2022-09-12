import { ref } from 'vue';
import { MemberInformation, User } from 'src/utils';

export const handleUserData = () => {
  const getExpirationDate = (expiration?: string) => {
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

  const getUserName = (memberInformation?: MemberInformation) => {
    const firstName = ref<string>('');
    const lastName = ref<string>('');

    if (memberInformation) {
      const { first_names } = memberInformation;
      const { last_names } = memberInformation;

      firstName.value = first_names.split(' ')[0];
      lastName.value = last_names.split(' ')[0];
    }

    return {
      firstName,
      lastName,
    };
  };

  const parseUserData = (user?: User) => {
    const memberCode = ref<string>(user?.member_code ?? '');
    const avatar = user?.avatar_url;

    const { firstName, lastName } = getUserName(user?.member_info);

    const subscriptions = user?.member_info.subscriptions || [];
    const lastSubscription = subscriptions[subscriptions.length - 1];

    const { expirationDate, isMembershipActive } = getExpirationDate(
      lastSubscription?.expiration
    );

    return {
      memberCode,
      firstName,
      lastName,
      avatar,
      expirationDate,
      isMembershipActive,
    };
  };

  return { parseUserData };
};
