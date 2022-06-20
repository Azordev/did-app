<template>
  <back-button />
  <product-layout
    v-if="product"
    @on-add-to-shopping-cart="toggleProduct(product as Product)"
    :is-product-in-cart="checkIsProductInCart(product.id, shoppingCart)"
    :product="product"
  />
</template>

<script setup lang="ts">
import ProductLayout from './Product.layout.vue';
import BackButton from 'src/components/BackButton';
import { handleProductQuery } from './utils/handleProductQuery';
import { handleShoppingCart, checkIsProductInCart, Product } from 'src/utils';
import './styles.scss';

const { product, productId, getProductDetail } = handleProductQuery();
const { shoppingCart, toggleProduct } = handleShoppingCart();

await getProductDetail(productId);
</script>
