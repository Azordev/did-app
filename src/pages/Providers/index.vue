<template>
  <providers-layout :isLoading="isLoading" :providers="providers" />
</template>

<script setup lang="ts">
import { handleProvidersList } from './utils';
import ProvidersLayout from './Providers.layout.vue';
import './Providers.scss';

const { providers, getProvidersList, isLoading } = handleProvidersList();

await getProvidersList();
</script>
