<template>
  <header-with-back-btn show-back-btn label-back="Eventos" />
  <event-layout v-if="event" :event="event" />
</template>

<script setup lang="ts">
import EventLayout from './Event.layout.vue';
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { handleEventQuery } from './utils/handleEventQuery';

const { event, eventId, getEventDetail } = handleEventQuery();

await getEventDetail(eventId);
</script>
