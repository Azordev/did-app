<template>
  <home-layout :user="user" :events="events" :providers="providers" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeLayout from './Home.layout.vue';
import { user } from './mock';
import { getListOfEventsForHome, getListOfProviders } from '../../actions';
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
    await getListOfProviders({ limit: 6 }).then((res) => {
      providers.value = res;
    });

    return { user, events, providers };
  },
});
</script>
