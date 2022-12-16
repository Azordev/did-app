<template>
  <detail-layout
    class="Product"
    :image_url="product?.image_url"
    :fallback="DIDLogo"
  >
    <template #custom-name>
      <span class="Product__title">
        <span>{{ product.name }}</span>
      </span>
    </template>

    <template #default>
      <div class="Product__details">
        <div>
          <span class="Product__price">S/. {{ product?.base_price_sol }}</span>
          <p class="Product__description">{{ product?.description }}</p>
        </div>
      </div>
    </template>
  </detail-layout>
</template>

<script lang="ts" setup>
import DetailLayout from 'src/components/DetailLayout';
import DIDLogo from 'src/assets/logos/product-default.svg';
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
