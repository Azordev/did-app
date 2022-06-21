<template>
  <shopping-cart-layout :provider="provider" :products="updatedProducts" />
</template>

<script setup lang="ts">
import ShoppingCartLayout from './ShoppingCart.layout.vue';
import { handleShoppingCart } from 'src/utils';
import { getUpdatedProducts } from './utils/getUpdatedProducts';
import { getProviderById } from './utils/getProviderById';

const { provider } = await getProviderById();

const { shoppingCart } = handleShoppingCart();
const { updatedProducts } = await getUpdatedProducts(shoppingCart.value);

console.log(updatedProducts.value);
</script>
