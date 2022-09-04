<template>
  <div>
    <user-header
      :expirationDate="expirationDate"
      :isMembershipActive="isMembershipActive"
      :avatar="avatar"
    />
    <div>
      <user-data
        :firstName="firstName"
        :lastName="lastName"
        :memberCode="memberCode"
        :email="email"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserType } from './mock';
import { UserHeader, UserData } from './components';
import { handleUserData } from './utils/handleUserData';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';
import './styles.scss';

interface UserLayoutProps {
  user?: UserType;
}

const props = defineProps<UserLayoutProps>();

const { parseUserData } = handleUserData();

if (!props.user) {
  const router = useRouter();

  Notify.create({
    message: 'Hemos tenido problemas para localizar tu usuario',
    type: 'Negative',
  });

  router.push({ name: 'login' });
}

const {
  expirationDate,
  isMembershipActive,
  firstName,
  lastName,
  email,
  memberCode,
  avatar,
} = parseUserData(props.user);
</script>
