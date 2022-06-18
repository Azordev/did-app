<template>
  <provider-layout
    :id="id"
    :provider="provider"
    :products="products"
    v-model:search-text="searchText"
    @onSearch="getProductLists(id, searchText)"
    :isLoading="isLoading"
  />
</template>

<script setup lang="ts">
import { getProviderById, handleProviderProducts } from './utils';
import ProviderLayout from './Provider.layout.vue';

const { provider, id } = await getProviderById();

const { getProductLists, query, products, searchText, isLoading } =
  handleProviderProducts();

await getProductLists(id, query.value);
</script>
