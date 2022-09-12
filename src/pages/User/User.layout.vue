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
        :new-password="newPassword"
        @update:new-password="$emit('update:newPassword', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from 'src/utils/apollo.types';
import { UserHeader, UserData } from './components';
import { handleUserData } from 'src/utils';

interface UserLayoutProps {
  user: User;
  newPassword: string;
}

interface UserLayoutEmits {
  (eventName: 'update:newPassword', value: string): void;
}

const props = defineProps<UserLayoutProps>();
defineEmits<UserLayoutEmits>();

const { parseUserData } = handleUserData();

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
