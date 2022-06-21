<template>
  <ul class="ProductList">
    <ProductListItem
      v-for="product in products"
      :product="product"
      :quantity="productQuantity"
      :key="product.id"
      @on-quantity-change="onQuantityChange"
    />
  </ul>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';
import { ref } from 'vue';
import ProductListItem from '../ProductListItem/ProductListItem.vue';
import './ProductList.scss';

interface ProductListItemProps {
  products?: Product[];
}

interface ProductListItemEmits {
  (eventName: 'onQuantityChange', quantity: number): void;
}

defineProps<ProductListItemProps>();
const emit = defineEmits<ProductListItemEmits>();

const productQuantity = ref<number>(1);

const onQuantityChange = (newQuantity: number) => {
  productQuantity.value = newQuantity;

  emit('onQuantityChange', productQuantity.value);
};
</script>
