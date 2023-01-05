<template>
  <div class="shopping-cart">
    <shopping-cart-header :image_url="provider?.logo_url" />

    <div class="shopping-cart__content">
      <h1 class="shopping-cart__title">Detalles de la consulta</h1>

      <div v-if="cartProducts?.length">
        <product-list
          @on-quantity-change="$emit('onQuantityChange', $event)"
          :cartProducts="cartProducts"
        />

        <div class="shopping-cart__separator" />

        <div class="shopping-cart__totalContainer">
          <h4 class="shopping-cart__total">Total</h4>
          <p class="shopping-cart__result">S/. {{ total }}</p>
        </div>

        <a
          :disable="!whatsappLink"
          class="shopping-cart__button"
          target="_blank"
          color="primary"
          size="large"
          no-caps
          :href="whatsappLink"
          >Consultar</a
        >
        <a
          class="shopping-cart__emailLink"
          v-if="!whatsappLink"
          target="_blank"
          :href="emailLink"
          >El proveedor no tiene numero de WhatsApp. Enviale un correo</a
        >
      </div>
      <div v-else>
        <h2 class="shopping-cart__empty-title">
          No hay productos en tu lista de favoritos
        </h2>
        <p class="shopping-cart__empty-description">
          No has elegido productos favoritos
        </p>
        <q-btn
          class="shopping-cart__button"
          color="primary"
          size="large"
          no-caps
          @click="$emit('backToProvider')"
        >
          Seguir consultando
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
