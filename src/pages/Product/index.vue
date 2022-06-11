<template>
  <back-button />
  <product-layout :product="product" />
</template>

<script setup lang="ts">
import ProductLayout from './Product.layout.vue';
import BackButton from '../../components/BackButton';
import { handleProductQuery } from './utils/handleProductQuery.ts';
import './styles.scss';

const { product, productId, getProductDetail } = handleProductQuery();

await getProductDetail(productId);
</script>
