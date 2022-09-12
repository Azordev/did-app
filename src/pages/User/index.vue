<template>
  <user-layout :user="user" />
</template>

<script setup lang="ts">
import { User } from 'src/utils';
import { ref } from 'vue';
import UserLayout from './User.layout.vue';
import { getUser } from 'src/utils';

const user = ref<User>(getUser());
</script>
