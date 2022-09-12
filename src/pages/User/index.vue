<template>
  <user-layout :user="user" />
</template>

<script setup lang="ts">
import UserLayout from './User.layout.vue';
import { user } from './mock';
</script>
