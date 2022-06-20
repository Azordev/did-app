<template>
  <div class="ProviderProducts">
    <provider-product
      v-for="product in products"
      :key="product.id"
      :product="product"
      :is-product-in-cart="checkIsProductInCart(product.id, cartProducts)"
      @on-add-to-shopping-cart="$emit('onAddToShoppingCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { Product, checkIsProductInCart } from 'src/utils';
import ProviderProduct from '../ProviderProduct';

interface ProviderProductsProps {
  products: Product[];
  cartProducts?: Product[];
}

interface Emits {
  (eventName: 'onAddToShoppingCart', product: Product): void;
}

defineProps<ProviderProductsProps>();
defineEmits<Emits>();
</script>
