<template>
  <header-with-back-btn
    back-btn-to-home
    show-back-btn
    label="Inicio"
    float-right-label="Calendario"
    class="events-calendar__header"
  />
  <q-date
    class="events-calendar__calendar"
    color="blue"
    flat
    square
    ref="calendar"
    default-view="Calendar"
    no-unset
    v-model="selectedDate"
    :locale="dateLocales"
    :events="eventsDates || []"
    :options="eventsDates || []"
    @update:model-value="$emit('selectDate', $event)"
  />
  <div class="events-calendar__events">
    <div class="events-calendar__event" v-for="event in events" :key="event.id">
      <div class="events-calendar__event-date">
        {{ parseEventDay(event.date) }}
      </div>
      <div>{{ event.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { ref, defineProps, defineEmits } from 'vue';
import dateLocales from './dateLocales.json';
import './style.scss';
import { Event } from 'src/utils';

const selectedDate = ref('');

interface EventsCalendarProps {
  events: Event[];
  eventsDates: string[];
}

interface EventsCalendarEmits {
  (eventName: 'selectDate', value?: string): void;
}

const parseEventDay = (_date: string) => {
  const date = new Date(_date);

  const month = date.toLocaleString('es-ES', {
    month: 'long',
  });

  const day = date.getDay();

  return `${month} ${day}`;
};

defineProps<EventsCalendarProps>();
defineEmits<EventsCalendarEmits>();
</script>
