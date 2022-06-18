<template>
  <div class="ProviderProducts">
    <provider-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';
import ProviderProduct from '../ProviderProduct';

interface ProviderProductsProps {
  products: Product[];
}

defineProps<ProviderProductsProps>();
</script>
