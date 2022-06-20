<template>
  <li class="ProductListItem">
    <span class="ProductListItem__container">
      <div class="ProductListItem__leftAlignedContent">
        <products-quantity :quantity="quantity || 1" />
        <span class="ProductListItem__name">{{ product.name }}</span>
      </div>
      <span class="ProductListItem__price">
        S/. {{ product.base_price_sol }}
      </span>
    </span>
  </li>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';
import ProductsQuantity from '../ProducstQuantity';
import './ProductListItem.scss';

interface ProductListItemProps {
  product: Product;
  quantity: number;
}

interface ProductListItemEmits {
  (eventName: 'onChange', value: number): void;
}

defineProps<ProductListItemProps>();
defineEmits<ProductListItemEmits>();
</script>
