<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script setup lang="ts">
import HomeLayout from './Home.layout.vue';
import { user } from './mock';
import { getListOfEventsForHome, getListOfProviders } from '../../actions';
import { Event, Provider } from '../../utils';
import { ref } from 'vue';

const events = ref<Event[]>();
const providers = ref<Provider[]>();

events.value = await getListOfEventsForHome();
await getListOfProviders({ limit: 6 }).then((res) => {
  providers.value = res;
});
</script>
