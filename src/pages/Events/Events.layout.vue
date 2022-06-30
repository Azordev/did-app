<template>
  <header-with-search-bar
    title="Eventos"
    :query-value="searchText || ''"
    @update:query-value="$emit('update:searchText', $event?.toString())"
    @on-search="$emit('onSearch')"
    @on-clear="$emit('onClear')"
  />
  <div class="events__container">
    <div class="events__list">
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
  </div>
</template>

<script lang="ts" setup>
import { Event, EventType } from 'src/utils';
import { HeaderWithSearchBar } from 'src/components';
import EventCard from 'src/components/EventCard';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './styles.scss';
import BaseLoading from 'src/components/LoadingComponent/BaseLoading.vue';

interface EventLayoutProps {
  events?: Event[];
  searchText: string;
  isLoading: boolean;
}

interface EventLayoutEmits {
  (eventName: 'update:searchText', value?: string): void;
  (eventName: 'onSearch'): void;
  (eventName: 'onClear'): void;
}

defineProps<EventLayoutProps>();
defineEmits<EventLayoutEmits>();
</script>
