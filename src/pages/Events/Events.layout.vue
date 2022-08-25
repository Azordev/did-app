<template>
  <header-with-back-btn label="Eventos" class="events__header" />
  <div class="events__container">
    <div class="events__list" v-if="events?.length || isLoading">
      <template v-if="!isLoading">
        <event-card
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :image_url="event.image_url || DIDLogo"
          :date="new Date(event.date)"
          :is-announcement="event.type === EventType.PUBLIC"
          @click="
            $router.push({ name: 'eventDetail', params: { event: event.id } })
          "
        />
      </template>
      <base-loading v-else />
    </div>
    <div class="events__empty-message" v-else>
      <p>Pronto habran más eventos disponibles.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Event, EventType } from 'src/utils';
import { HeaderWithBackBtn } from 'src/components';
import EventCard from 'src/components/EventCard';
import DIDLogo from 'src/assets/logos/didperu-dark.svg';
import './styles.scss';
import BaseLoading from 'src/components/LoadingComponent/BaseLoading.vue';

interface EventLayoutProps {
  events?: Event[];
  isLoading: boolean;
}

defineProps<EventLayoutProps>();
</script>
