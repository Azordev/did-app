<template>
  <div class="Detail__container">
    <h1 class="Detail__name">
      <slot name="custom-name">{{ name }}</slot>
    </h1>
    <q-img
      class="Detail__image"
      :src="image_url || fallback"
      :class="{ 'Detail__image--error': !image_url }"
    >
      <template v-slot:error>
        <q-img :src="fallback" class="Detail__image--error" />
      </template>
    </q-img>
    <div class="Detail__information">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './styles.scss';

interface DetailLayoutProps {
  name?: string;
  image_url?: string;
  fallback: string;
}

defineProps<DetailLayoutProps>();
</script>
