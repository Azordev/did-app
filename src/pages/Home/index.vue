<template>
  <home-layout :user="user" :events="events" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeLayout from './Home.layout.vue';
import { user } from './mock';
import { getListOfEventsForHome } from '../../actions';
import { Event } from '../../utils';

export default defineComponent({
  name: 'Home',
  components: {
    HomeLayout,
  },
  async setup() {
    const events = ref<Event[]>();

    events.value = await getListOfEventsForHome();

    return { user, events };
  },
});
</script>
