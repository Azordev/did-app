<template>
  <events-calendar :events="events" :events-dates="eventsDates" />
</template>

<script setup lang="ts">
import { Event } from 'src/utils';
import { ref } from 'vue';
import EventsCalendar from './EventsCalendar.layout.vue';

const events = ref<Event[]>([]);
const eventsDates = ref<string[]>([]);

// Add here the logic to get the events for the current user and save it in events and eventsDates variables
</script>
