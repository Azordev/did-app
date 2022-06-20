<template>
  <div class="ShoppingCart">
    <shopping-cart-header :image_url="provider?.logo_url" />

    <div class="ShoppingCart__content">
      <h1 class="ShoppingCart__title">Detalles de la compra</h1>

      <product-list :products="products" />

      <div class="ShoppingCart__separator" />

      <div class="ShoppingCart__totalContainer">
        <h4 class="ShoppingCart__total">Total</h4>
        <p class="ShoppingCart__result">S/. 80</p>
      </div>

      <q-btn
        class="ShoppingCart__consultButton"
        color="primary"
        size="large"
        no-caps
        >Consultar</q-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product, Provider } from 'src/utils';
import ShoppingCartHeader from './components/ShoppingCartHeader/ShoppingCartHeader.vue';
import './ShoppingCart.scss';
import ProductList from './components/ProductsList/ProductList.vue';

interface ShoppingCartLayoutProps {
  products: Product[];
  provider: Provider;
}

defineProps<ShoppingCartLayoutProps>();
</script>
