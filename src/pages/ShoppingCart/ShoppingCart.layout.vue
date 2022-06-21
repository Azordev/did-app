<template>
  <div class="ShoppingCart">
    <shopping-cart-header :image_url="provider?.logo_url" />

    <div class="ShoppingCart__content">
      <h1 class="ShoppingCart__title">Detalles de la compra</h1>

      <div v-if="cartProducts?.length">
        <product-list
          @on-quantity-change="$emit('onQuantityChange', $event)"
          :cartProducts="cartProducts"
        />

        <div class="ShoppingCart__separator" />

        <div class="ShoppingCart__totalContainer">
          <h4 class="ShoppingCart__total">Total</h4>
          <p class="ShoppingCart__result">S/. {{ total }}</p>
        </div>

        <a
          :disable="!whatsappLink"
          class="ShoppingCart__button"
          target="_blank"
          color="primary"
          size="large"
          no-caps
          :href="whatsappLink"
          >Consultar</a
        >
        <a
          class="ShoppingCart__emailLink"
          v-if="!whatsappLink"
          target="_blank"
          :href="emailLink"
          >El proveedor no tiene numero de WhatsApp. Enviale un correo</a
        >
      </div>
      <div v-else>
        <h2 class="ShoppingCart__empty-title">
          No hay productos en tu carrito de compras
        </h2>
        <p class="ShoppingCart__empty-description">
          Agrega productos a tu carrito de compras para poder comprar
        </p>
        <q-btn
          class="ShoppingCart__button"
          color="primary"
          size="large"
          no-caps
          @click="$emit('backToProvider')"
        >
          Seguir comprando
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Provider } from 'src/utils';
import ShoppingCartHeader from './components/ShoppingCartHeader/ShoppingCartHeader.vue';
import './ShoppingCart.scss';
import ProductList from './components/ProductsList/ProductList.vue';
import { ShoppingCartProduct } from './utils/concatProductsAndQuantity';

interface ShoppingCartLayoutProps {
  cartProducts?: ShoppingCartProduct[];
  provider?: Provider;
  total: string;
  whatsappLink?: string;
  emailLink?: string;
}

interface ProductListItemEmits {
  (
    eventName: 'onQuantityChange',
    value: { productId: string; quantity: number }
  ): void;
  (eventName: 'backToProvider'): void;
}

defineProps<ShoppingCartLayoutProps>();
defineEmits<ProductListItemEmits>();
</script>
