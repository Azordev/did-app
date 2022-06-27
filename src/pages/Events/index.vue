<template>
  <events-layout :events="events" />
</template>

<script setup lang="ts">
import EventsLayout from './Events.layout.vue';
import { getListOfEvents } from 'src/actions';

const events = await getListOfEvents();
</script>
