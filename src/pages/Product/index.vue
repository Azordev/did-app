<template>
  <header-with-back-btn
    show-back-btn
    :label="product?.name || ''"
    :img-url="provider?.logo_url"
  />
  <product-layout
    v-if="product"
    @on-add-to-shopping-cart="toggleProduct(product)"
    :is-product-in-cart="checkIsProductInCart(product.id, shoppingCart)"
    :product="product"
  />
</template>

<script setup lang="ts">
import ProductLayout from './Product.layout.vue';
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { handleProductQuery, handleProviderQuery } from './utils';
import {
  handleShoppingCart,
  checkIsProductInCart,
  confirmBeforeExit,
} from 'src/utils';
import { useRoute } from 'vue-router';
import './styles.scss';

const route = useRoute();

const { product, getProductDetail } = handleProductQuery();
const { shoppingCart, toggleProduct } = handleShoppingCart();
const { provider, getProviderDetail } = handleProviderQuery();

confirmBeforeExit({
  currentRouteParent: route.matched[0]?.path,
  message:
    'Si sales de la página, se perderá lo que guardaste en el carrito de compras',
});

await getProductDetail();
await getProviderDetail();
</script>
