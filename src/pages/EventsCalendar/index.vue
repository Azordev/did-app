<template>
  <events-calendar
    :events="events"
    @selectDate="selectDate"
    :events-dates="eventsDates"
  />
</template>

<script setup lang="ts">
import EventsCalendar from './EventsCalendar.layout.vue';
import { handleEventsCalendar } from './utils/handleEventsCalendar';

const { events, eventsDates, getEventsByDate, getEventsDates } =
  handleEventsCalendar();

eventsDates.value = getEventsDates();

const selectDate = (selectedDateString: string) => {
  const selectedDate = new Date(selectedDateString);

  events.value = getEventsByDate(selectedDate);
};
</script>
