<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeLayout from './Home.layout.vue';
import { user } from './mock';
import {
  getListOfEventsForHome,
  getListOfProvidersForHome,
} from '../../actions';
import { Event, Provider } from '../../utils';

export default defineComponent({
  name: 'Home',
  components: {
    HomeLayout,
  },
  async setup() {
    const events = ref<Event[]>();
    const providers = ref<Provider[]>();

    events.value = await getListOfEventsForHome();
    providers.value = await getListOfProvidersForHome();

    return { user, events, providers };
  },
});
</script>
