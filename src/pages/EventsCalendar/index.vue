<template>
  <events-calendar
    :events="events"
    @selectDate="selectDate"
    :events-dates="eventsDates"
  />
</template>

<script setup lang="ts">
import { getUser } from 'src/utils';
import EventsCalendar from './EventsCalendar.layout.vue';
import { handleEventsCalendar } from './utils/handleEventsCalendar';

const { events, eventsDates, getEventsByDate, getEventsDates } =
  handleEventsCalendar();
const user = getUser();

await getEventsDates(user.member_info.id).then((_eventsDates) => {
  eventsDates.value = _eventsDates;
});

const selectDate = (selectedDateString: string) => {
  const selectedDate = new Date(selectedDateString);

  events.value = getEventsByDate(selectedDate);
};
</script>
