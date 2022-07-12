<template>
  <providers-layout
    :isLoading="isLoading"
    :providers="providers"
    v-model:query-value="searchText"
  />
</template>

<script setup lang="ts">
import { getListOfProviders } from '../../actions';
import { handleListQuery } from '../../utils/apollo';
import ProvidersLayout from './Providers.layout.vue';
import './Providers.scss';

const {
  items: providers,
  query,
  currentPage,
  isLoading,
  searchText,
  order_by,
  getItemsList: getProvidersList,
} = handleListQuery(getListOfProviders);

await getProvidersList(currentPage.value, query.value, order_by.value);
</script>
