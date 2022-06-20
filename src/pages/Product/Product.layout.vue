<template>
  <detail-layout :image_url="product?.image_url" :name="product?.name">
    <div class="Product__details">
      <div>
        <span class="Product__price">S/. {{ product?.base_price_sol }}</span>
        <p class="Product__description">{{ product?.description }}</p>
      </div>
      <q-btn
        class="ProductList__item_button"
        :color="isProductInCart ? 'negative' : 'accent'"
        :icon="isProductInCart ? 'remove_shopping_cart' : 'add_shopping_cart'"
        @click.stop="$emit('onAddToShoppingCart', product)"
      />
    </div>
  </detail-layout>
</template>

<script lang="ts" setup>
import DetailLayout from '../../components/DetailLayout';
import { Product } from 'src/utils';

interface ProductLayoutProps {
  product: Product;
  isProductInCart?: boolean;
}

interface ProductLayoutEmits {
  (eventName: 'onAddToShoppingCart', product: Product): void;
}

defineProps<ProductLayoutProps>();
defineEmits<ProductLayoutEmits>();
</script>
