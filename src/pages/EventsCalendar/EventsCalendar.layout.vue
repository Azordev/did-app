<template>
  <header-with-back-btn
    back-btn-to-home
    show-back-btn
    label="Inicio"
    float-right-label="Calendario"
    class="events-calendar__header"
  />
  <q-date
    :class="`events-calendar__calendar ${
      isLoading && 'events-calendar__calendar--loading'
    }`"
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
  <div v-if="!isLoading" class="events-calendar__events">
    <div class="events-calendar__event" v-for="event in events" :key="event.id">
      <div class="events-calendar__event-date">
        {{ parseEventDay(event.date) }}
      </div>
      <div class="events-calendar__event-title">{{ event.title }}</div>
    </div>
  </div>
  <div class="flex flex-center" v-else>
    <q-spinner color="primary" size="3em" />
  </div>
  <div v-if="!isLoading" class="events-calendar__tip_text">
    Puedes cambiar el mes y año presionando sobre ellos en el calendario.
  </div>
</template>

<script setup lang="ts">
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { ref } from 'vue';
import dateLocales from './dateLocales.json';
import './style.scss';
import { Event } from 'src/utils';

const selectedDate = ref('');

interface EventsCalendarProps {
  events: Event[];
  eventsDates: string[];
  isLoading: boolean;
}

interface EventsCalendarEmits {
  (eventName: 'selectDate', value: string): void;
}

const parseEventDay = (_date: string) => {
  const date = new Date(_date);

  const month = date.toLocaleString('es-ES', {
    month: 'long',
  });

  const day = date.getUTCDate();

  return `${month} ${day}`;
};

defineProps<EventsCalendarProps>();
defineEmits<EventsCalendarEmits>();
</script>
