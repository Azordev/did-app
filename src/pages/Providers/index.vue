<template>
  <providers-layout
    :isLoading="isLoading"
    :providers="providers"
    v-model:query-value="searchText"
  />
</template>

<script setup lang="ts">
import { handleProvidersList } from './utils';
import ProvidersLayout from './Providers.layout.vue';
import './Providers.scss';

const { providers, getProvidersList, isLoading, query, searchText } =
  handleProvidersList();

await getProvidersList(query.value);
</script>
