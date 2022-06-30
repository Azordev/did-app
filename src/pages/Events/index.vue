<template>
  <events-layout
    :events="events"
    :is-loading="isLoading"
    @on-clear="clearSearch"
    @on-search="getEventList(searchText)"
    v-model:search-text="searchText"
  />
</template>

<script setup lang="ts">
import EventsLayout from './Events.layout.vue';
import { handleEventList } from './utils/handleEventList';

const { isLoading, clearSearch, getEventList, events, searchText } =
  handleEventList();

await getEventList();
</script>
