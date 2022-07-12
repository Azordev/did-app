<template>
  <div class="ShoppingCartHeader">
    <back-button class="ShoppingCartHeader__back-btn" label="Atrás" />
    <div class="ShoppingCartHeader__container">
      <q-img class="ShoppingCartHeader__image" :src="image_url || DIDLogo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackButton from 'src/components/BackButton/BackButton.vue';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './ShoppingCartHeader.scss';

interface ShoppingCartHeaderProps {
  image_url?: string;
}

defineProps<ShoppingCartHeaderProps>();
</script>
