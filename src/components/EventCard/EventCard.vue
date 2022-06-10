<template>
  <q-card class="EventCard">
    <q-card-section class="EventCard__container" horizontal>
      <div class="EventCard__imageContainer">
        <q-img class="EventCard__image" ratio="4/3" :src="image_url" />
      </div>

      <div class="EventCard__name">
        <p>{{ title }}</p>
      </div>

      <div class="EventCard__date">
        <strong>{{ parsedDate }}</strong>
      </div>
      <div v-if="isAnnouncement" class="EventCard__bookmark">
        <book-mark label="Convocatoria" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';
import { computed } from 'vue';
import BookMark from '../BookMark';

export interface EventCardProps {
  title: string;
  image_url: string;
  date: Date;
  isAnnouncement: boolean;
}

const props = defineProps<EventCardProps>();

const parsedDate = computed(() =>
  props.date.toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
);
</script>
