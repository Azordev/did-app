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

<script setup lang="ts">
import { defineProps } from 'vue';
import { UserType } from './mock';
import { HomeHeader } from './components';
import { Event } from '../../utils';
import { handleUserData } from './utils/handleUserData.ts';

interface HomeLayoutProps {
  user: UserType;
  events: Event[];
}

const props = defineProps<HomeLayoutProps>();

const { parseUserData } = handleUserData();

const {
  expirationDate,
  isMembershipActive,
  firstName,
  lastName,
  userCode,
  avatar,
} = parseUserData(props.user);
</script>
