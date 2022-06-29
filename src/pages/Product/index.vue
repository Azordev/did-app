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
import {
  handleShoppingCart,
  checkIsProductInCart,
  confirmBeforeExit,
  Product,
} from 'src/utils';
import { useRoute } from 'vue-router';
import './styles.scss';

const route = useRoute();

const { product, productId, getProductDetail } = handleProductQuery();
const { shoppingCart, toggleProduct } = handleShoppingCart();

confirmBeforeExit({
  currentRouteParent: route.matched[0]?.path,
  message:
    'Si sales de la página, se perderá lo que guardaste en el carrito de compras',
});

await getProductDetail(productId);
</script>
