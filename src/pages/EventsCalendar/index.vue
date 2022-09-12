<template>
  <events-calendar
    :events="events"
    @selectDate="selectDate"
    :events-dates="eventsDates"
  />
</template>

<script setup lang="ts">
import { Event } from 'src/utils';
import { ref } from 'vue';
import EventsCalendar from './EventsCalendar.layout.vue';
import { mock_events, events_dates } from './mock';
import { getDateFromTimestamptz } from './utils/parseTimestamptz';

const events = ref<Event[]>([]);
const eventsDates = ref<string[]>(events_dates);

const selectDate = (selectedDateString: string) => {
  const selectedDate = new Date(selectedDateString);

  events.value = mock_events.filter((event) => {
    const { date: eventDateString } = getDateFromTimestamptz(event.date);
    const eventDate = new Date(eventDateString);

    return eventDate.getTime() === selectedDate.getTime();
  });
};

// Reeplace mock data for database data
</script>
