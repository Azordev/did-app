<template>
  <user-layout
    v-model:new-password="newPassword"
    v-model:new-avatar="newAvatar"
    :user="user"
    :is-form-loading="isLoading"
    :see-password="seePassword"
    :is-editing-password="isEditingPassword"
    @see-password="seePassword = $event"
    @edit-password="isEditingPassword = $event"
    @save-password="(newPassword) => onUpdateUserPassword(user.id, newPassword)"
    @save-avatar="(newAvatar) => onUpdateUserAvatar(user.id, newAvatar)"
  />
</template>

<script setup lang="ts">
import { User } from 'src/utils';
import { ref } from 'vue';
import UserLayout from './User.layout.vue';
import { getUser } from 'src/utils';
import { handleUserPassword } from './utils/handleUserPassword';
import { handleUserAvatar } from './utils/handleUserAvatar';

const user = ref<User>(getUser());

const {
  seePassword,
  isEditingPassword,
  newPassword,
  isLoading,
  onUpdateUserPassword,
} = handleUserPassword();

const { newAvatar, isLoadingAvatar, onUpdateUserAvatar } = handleUserAvatar();
</script>
