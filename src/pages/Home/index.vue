<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script setup lang="ts">
import HomeLayout from './Home.layout.vue';
<<<<<<< HEAD
import { getListOfEventsForHome, getListOfProviders } from '../../actions';
import { Event, getUser, Provider, User } from '../../utils';
=======
import { getListOfEventsForHome, getListOfProviders } from 'src/actions';
import { Event, getUser, Provider, User } from 'src/utils';
>>>>>>> 568bc37b88c080c3527b06e68dd0438fe3ac0ad2
import { ref } from 'vue';

const events = ref<Event[]>();
const providers = ref<Provider[]>();
const user = ref<User>(getUser());

events.value = await getListOfEventsForHome();
await getListOfProviders({ limit: 6 }).then((res) => {
  providers.value = res;
});
</script>
