<template>
  <item-header show-back-btn label="Eventos" />
  <event-layout v-if="event" :event="event" />
</template>

<script setup lang="ts">
import EventLayout from './Event.layout.vue';
import ItemHeader from 'src/components/ItemHeader';
import { handleEventQuery } from './utils/handleEventQuery';

const { event, eventId, getEventDetail } = handleEventQuery();

await getEventDetail(eventId);
</script>
