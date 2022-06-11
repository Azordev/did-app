<template>
  <detail-layout :image_url="product.image_url" :name="product.name">
    <div class="Product__details">
      <div>
        <span class="Product__price">S/. {{ product.base_price_sol }}</span>
        <p class="Product__description">{{ product.description }}</p>
      </div>
      <q-btn
        class="Product__cart_button"
        color="accent"
        icon="add_shopping_cart"
      />
    </div>
  </detail-layout>
</template>

<script lang="ts" setup>
import DetailLayout from '../../components/DetailLayout';
import { Product } from 'src/utils';

interface ProductLayoutProps {
  product: Product;
}

defineProps<ProductLayoutProps>();
</script>
