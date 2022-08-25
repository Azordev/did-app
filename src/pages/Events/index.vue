<template>
  <events-layout :events="events" :is-loading="isLoading" />
</template>

<script setup lang="ts">
import EventsLayout from './Events.layout.vue';
import { handleEventList } from './utils/handleEventList';

const { isLoading, getEventList, events } = handleEventList();

await getEventList();
</script>
