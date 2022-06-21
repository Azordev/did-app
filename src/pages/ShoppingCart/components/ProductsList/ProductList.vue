<template>
  <ul class="ProductList">
    <ProductListItem
      v-for="cartProduct in cartProducts"
      :product="cartProduct.product"
      :quantity="cartProduct.quantity"
      :key="cartProduct.product.id"
      @on-quantity-change="$emit('onQuantityChange', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import ProductListItem from '../ProductListItem/ProductListItem.vue';
import './ProductList.scss';
import { ShoppingCartProduct } from '../../utils/concatProductsAndQuantity';

interface ProductListItemProps {
  cartProducts?: ShoppingCartProduct[];
}

interface ProductListItemEmits {
  (
    eventName: 'onQuantityChange',
    value: { productId: string; quantity: number }
  ): void;
}

defineProps<ProductListItemProps>();
defineEmits<ProductListItemEmits>();
</script>
