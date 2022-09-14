<template>
  <events-calendar
    :events="events"
    :events-dates="eventsDates"
    :is-loading="isLoading"
    @selectDate="selectDate"
  />
</template>

<script setup lang="ts">
import { getUser } from 'src/utils';
import EventsCalendar from './EventsCalendar.layout.vue';
import { handleEventsCalendar } from './utils/handleEventsCalendar';

const { events, eventsDates, isLoading, getEventsByDate, getEventsDates } =
  handleEventsCalendar();
const user = getUser();
const memberId = user.member_info.id;

await getEventsDates(memberId).then((_eventsDates) => {
  eventsDates.value = _eventsDates;
});

const selectDate = (selectedDateString: string) => {
  const selectedDate = new Date(selectedDateString);

  getEventsByDate(selectedDate, memberId).then((_events) => {
    events.value = _events;
  });
};
</script>
