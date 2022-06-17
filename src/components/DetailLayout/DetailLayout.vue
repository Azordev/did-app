<template>
  <div class="Detail__container">
    <h1 class="Detail__name">
      <slot name="custom-name">{{ name }}</slot>
    </h1>
    <q-img class="Detail__image" :src="image_url || DIDLogo" />
    <div class="Detail__information">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DIDLogo from '../../assets/logos/didperu.svg';
import './styles.scss';

interface DetailLayoutProps {
  name?: string;
  image_url?: string;
}

defineProps<DetailLayoutProps>();
</script>
