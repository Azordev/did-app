<template>
  <div class="HeaderWithBackBtn">
    <back-button v-if="showBackBtn" />
    <span class="HeaderWithBackBtn__text">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import BackButton from 'src/components/BackButton';
import './styles.scss';

interface HeaderWithBackBtnProps {
  label: string;
  showBackBtn?: boolean;
}

defineProps<HeaderWithBackBtnProps>();
</script>
