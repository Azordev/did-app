<template>
  <q-card @click="$emit('onClick')" flat class="ProviderCard">
    <q-img class="ProviderCard__image" :src="image_url" aspect-ratio="4/4" />
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';

interface ProviderCardProps {
  image_url: string;
}

interface ProviderCardEmits {
  (EventName: 'onClick'): void;
}

defineProps<ProviderCardProps>();
defineEmits<ProviderCardEmits>();
</script>
