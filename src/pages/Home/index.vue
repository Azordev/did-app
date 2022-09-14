<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script setup lang="ts">
import HomeLayout from './Home.layout.vue';
import { getListOfEventsForHome, getListOfProviders } from 'src/actions';
import { Event, getUser, Provider, User } from 'src/utils';
import { ref } from 'vue';

const events = ref<Event[]>();
const providers = ref<Provider[]>();
const user = ref<User>(getUser());

events.value = await getListOfEventsForHome();
await getListOfProviders({ limit: 6 }).then((res) => {
  providers.value = res;
});
</script>
