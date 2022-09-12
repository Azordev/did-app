<template>
  <user-layout
    v-model:new-password="newPassword"
    :user="user"
    :is-form-loading="isLoading"
    :see-password="seePassword"
    :is-editing-password="isEditingPassword"
    @see-password="seePassword = $event"
    @edit-password="isEditingPassword = $event"
    @save-password="(newPassword) => onUpdateUserPassword(user.id, newPassword)"
  />
</template>

<script setup lang="ts">
import { User } from 'src/utils';
import { ref } from 'vue';
import UserLayout from './User.layout.vue';
import { getUser } from 'src/utils';
import { handleUserPassword } from './utils/handleUserPassword';

const user = ref<User>(getUser());

const {
  seePassword,
  isEditingPassword,
  newPassword,
  isLoading,
  onUpdateUserPassword,
} = handleUserPassword();
</script>
