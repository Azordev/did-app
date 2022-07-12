<template>
  <detail-layout class="Event__container" :image_url="event.image_url">
    <template #custom-name>
      <span class="Event__title">
        <span>{{ event.title }}</span>
        <span class="Event__date">{{ parsedEventDate }}</span>
      </span>
    </template>

    <template #default>
      <div class="Event__detail">
        <div class="Event__description">
          {{ event.description }}
        </div>
        <q-btn class="Event__btn-participate" color="primary" size="lg" no-caps>
          Participar
        </q-btn>
      </div>
    </template>
  </detail-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DetailLayout from '../../components/DetailLayout';
import { Event } from 'src/utils';
import './styles.scss';

const parsedEventDate = ref<string>();

interface EventLayoutProps {
  event: Event;
}

const props = defineProps<EventLayoutProps>();

parsedEventDate.value = new Date(props.event.date).toLocaleString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
</script>
