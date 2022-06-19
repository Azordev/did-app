<template>
  <provider-layout
    :id="id"
    :provider="provider"
    :products="products"
    :is-loading="isLoading"
    :cart-products="shoppingCart"
    v-model:search-text="searchText"
    @on-search="getProductLists(id, searchText)"
    @on-add-to-shopping-cart="onAddToShoppingCart($event)"
  />
</template>

<script setup lang="ts">
import { getProviderById, handleProviderProducts } from './utils';
import ProviderLayout from './Provider.layout.vue';
import { handleShoppingCart, isProductInCart, Product } from 'src/utils';

const { shoppingCart, addNewProduct, removeProduct } = handleShoppingCart();

const onAddToShoppingCart = (product: Product) => {
  if (isProductInCart(product.id, shoppingCart.value)) {
    return removeProduct(product.id);
  }

  addNewProduct(product);
};

const { provider, id } = await getProviderById();

const { getProductLists, query, products, searchText, isLoading } =
  handleProviderProducts();

await getProductLists(id, query.value);
</script>
