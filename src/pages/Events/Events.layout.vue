<template>
  <div class="events__header"></div>
  <div class="events__container">
    <div class="events__list">
      <event-card
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :image_url="event.image_url || DIDLogo"
        :date="new Date(event.date)"
        :is-announcement="event.type === EventType.PUBLIC"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Event, EventType } from 'src/utils';
import EventCard from 'src/components/EventCard';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './styles.scss';

interface EventLayoutProps {
  events: Event[];
}

defineProps<EventLayoutProps>();
</script>
