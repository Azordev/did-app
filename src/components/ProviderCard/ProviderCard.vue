<template>
  <q-card @click="$emit('onClick')" flat class="ProviderCard">
    <q-img
      class="ProviderCard__image"
      :src="image_url || fallback"
      aspect-ratio="4/4"
    >
      <template v-slot:error>
        <q-img class="EventCard__image" ratio="4/3" :src="fallback" />
      </template>
    </q-img>
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';

interface ProviderCardProps {
  image_url: string;
  fallback: string;
}

interface ProviderCardEmits {
  (EventName: 'onClick'): void;
}

defineProps<ProviderCardProps>();
defineEmits<ProviderCardEmits>();
</script>
