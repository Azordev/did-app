<template>
  <back-button />
  <event-layout :event="event" />
</template>

<script setup lang="ts">
import EventLayout from './Event.layout.vue';
import BackButton from '../../components/BackButton';
import { handleEventQuery } from './utils/handleEventQuery.ts';

const { event, eventId, getEventDetail } = handleEventQuery();

await getEventDetail(eventId);
</script>
