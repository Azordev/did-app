<template>
  <div class="HeaderWithBackBtn">
    <back-button v-if="showBackBtn" />
    <q-img class="HeaderWithBackBtn__img" v-if="imgUrl" :src="imgUrl" />
    <span v-else class="HeaderWithBackBtn__text">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import BackButton from 'src/components/BackButton';
import './styles.scss';

interface HeaderWithBackBtnProps {
  label: string;
  imgUrl?: string;
  showBackBtn?: boolean;
}

defineProps<HeaderWithBackBtnProps>();
</script>
