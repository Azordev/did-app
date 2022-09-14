<template>
  <q-card @click="$emit('clickOnProduct', product.id)" class="ProviderProduct">
    <q-card-section class="ProviderProduct__card" horizontal>
      <div class="ProviderProduct__imgContainer">
        <q-img
          class="ProviderProduct__img"
          ratio="4/3"
          :src="product.image_url || DIDLogo"
        >
          <template v-slot:error>
            <q-img :src="DIDLogo" />
          </template>
        </q-img>
      </div>

      <div class="ProviderProduct__name">
        <p>{{ product.name }}</p>
      </div>

      <q-card-section class="q-p-none ProviderProduct__checkoutInfo">
        <span class="ProviderProduct__price">
          <strong>S./ {{ product.base_price_sol }} </strong></span
        >
        <q-card-actions class="ProviderProduct__cart-button-container">
          <q-btn
            class="ProviderProduct__cart-button"
            :color="isProductInCart ? 'negative' : 'accent'"
            :icon="
              isProductInCart ? 'remove_shopping_cart' : 'add_shopping_cart'
            "
            @click.stop="$emit('onAddToShoppingCart', product)"
          />
        </q-card-actions>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';
import DIDLogo from 'src/assets/logos/didperu-dark.svg';

interface ProviderProductProps {
  product: Product;
  isProductInCart?: boolean;
}

interface Emits {
  (eventName: 'onAddToShoppingCart', product: Product): void;
  (eventName: 'clickOnProduct', id: string): void;
}

defineProps<ProviderProductProps>();
defineEmits<Emits>();
</script>
