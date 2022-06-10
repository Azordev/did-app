<template>
  <q-card flat class="ProviderCard">
    <q-img class="ProviderCard__image" :src="image_url" aspect-ratio="4/4" />
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';

interface ProviderCardProps {
  image_url: string;
  id: string;
}

defineProps<ProviderCardProps>();
</script>
