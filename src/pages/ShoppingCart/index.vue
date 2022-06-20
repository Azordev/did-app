<template>
  <shopping-cart-layout :products="updatedProducts" />
</template>

<script setup lang="ts">
import ShoppingCartLayout from './ShoppingCart.layout.vue';
import { handleShoppingCart } from 'src/utils';
import { getUpdatedProducts } from './utils/getUpdatedProducts';

const { shoppingCart } = handleShoppingCart();

const { updatedProducts } = await getUpdatedProducts(shoppingCart.value);
</script>
