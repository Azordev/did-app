<template>
  <div class="ItemHeader">
    <back-button v-if="showBackBtn" />
    <span class="ItemHeader__text">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import BackButton from 'src/components/BackButton';
import './styles.scss';

interface ItemHeaderProps {
  label: string;
  showBackBtn?: boolean;
}

defineProps<ItemHeaderProps>();
</script>
