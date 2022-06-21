<template>
  <provider-layout
    :id="id"
    :provider="provider"
    :products="products"
    :is-loading="isLoading"
    :cart-products="shoppingCart"
    v-model:search-text="searchText"
    @on-search="getProductLists(id, searchText)"
    @on-add-to-shopping-cart="toggleProduct($event)"
    @click-on-product="
      $router.push({
        name: 'productDetail',
        params: { provider: id, id: $event },
      })
    "
  />
</template>

<script setup lang="ts">
import { getProviderById, handleProviderProducts } from './utils';
import ProviderLayout from './Provider.layout.vue';
import { handleShoppingCart } from 'src/utils';

const { shoppingCart, toggleProduct } = handleShoppingCart();

const { provider, id } = await getProviderById();

const { getProductLists, query, products, searchText, isLoading } =
  handleProviderProducts();

await getProductLists(id, query.value);
</script>
