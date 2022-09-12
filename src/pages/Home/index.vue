<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script setup lang="ts">
import HomeLayout from './Home.layout.vue';
import { getListOfEventsForHome, getListOfProviders } from '../../actions';
import { Event, Provider, User } from '../../utils';
import { ref } from 'vue';
import { LocalStorage } from 'quasar';

const events = ref<Event[]>();
const providers = ref<Provider[]>();
const user = ref<User>(LocalStorage.getItem('user') as User);

events.value = await getListOfEventsForHome();
await getListOfProviders({ limit: 6 }).then((res) => {
  providers.value = res;
});
</script>
