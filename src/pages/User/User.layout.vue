<template>
  <div>
    <user-header
      :expirationDate="expirationDate"
      :isMembershipActive="isMembershipActive"
      :avatar="avatar"
      :member-code="memberCode"
    />
    <div>
      <user-data
        :firstName="firstName"
        :lastName="lastName"
        :memberCode="memberCode"
        :email="email"
        :new-password="newPassword"
        :is-form-loading="isFormLoading"
        :is-editing-password="isEditingPassword"
        :see-password="seePassword"
        @see-password="$emit('seePassword', $event)"
        @edit-password="$emit('editPassword', $event)"
        @update:new-password="$emit('update:newPassword', $event)"
        @save-password="$emit('savePassword', $event)"
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
  isFormLoading: boolean;
  isEditingPassword: boolean;
  seePassword: boolean;
}

interface UserLayoutEmits {
  (eventName: 'update:newPassword', value: string): void;
  (eventName: 'savePassword', value: string): void;
  (eventName: 'editPassword', value: boolean): void;
  (eventName: 'seePassword', value: boolean): void;
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
