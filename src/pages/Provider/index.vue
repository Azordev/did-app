<template>
  <provider-layout
    :id="id"
    :provider="provider"
    :products="products"
    :is-loading="isLoading"
    :cart-products="shoppingCart"
    v-model:search-text="searchText"
    :current-query="query"
    v-model:max-price-filter="maxPriceFilter"
    v-model:min-price-filter="minPriceFilter"
    @on-search="getProductLists(id, searchText)"
    @on-add-to-shopping-cart="toggleProduct($event)"
    @on-clear="clearSearch()"
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
import { handleShoppingCart, confirmBeforeExit } from 'src/utils';
import { useRoute } from 'vue-router';

const route = useRoute();

const { shoppingCart, toggleProduct } = handleShoppingCart();

const { provider, id } = await getProviderById();

const {
  getProductLists,
  query,
  products,
  searchText,
  isLoading,
  maxPriceFilter,
  minPriceFilter,
} = handleProviderProducts();

const clearSearch = () => {
  searchText.value = '';
  getProductLists(id, searchText.value);
};

confirmBeforeExit({
  currentRouteParent: route.matched[0].path,
  message:
    'Si sales de la página, se perderá lo que guardaste en la lista de favoritos',
});

await getProductLists(id, query.value);
</script>
