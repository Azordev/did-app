<template>
  <li class="ProductListItem">
    <span class="ProductListItem__container">
      <div class="ProductListItem__leftAlignedContent">
        <products-quantity
          :max-available="product.available || Infinity"
          @onChange="
            $emit('onQuantityChange', {
              productId: product.id,
              quantity: $event,
            })
          "
          :quantity="quantity"
        />
        <span class="ProductListItem__name">{{ product.name }}</span>
      </div>
      <span class="ProductListItem__price">
        S/. {{ getTotal(product.base_price_sol, quantity) }}
      </span>
    </span>
  </li>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';
import ProductsQuantity from '../ProductsQuantity';
import './ProductListItem.scss';

interface ProductListItemProps {
  product: Product;
  quantity: number;
}

interface ProductListItemEmits {
  (
    eventName: 'onQuantityChange',
    value: { productId: string; quantity: number }
  ): void;
}

defineProps<ProductListItemProps>();
defineEmits<ProductListItemEmits>();

const getTotal = (price = 0, quantity = 0) => {
  return (price * quantity).toFixed(2);
};
</script>
