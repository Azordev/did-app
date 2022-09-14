<template>
  <detail-layout
    class="Product"
    :image_url="product?.image_url"
    :fallback="DIDLogo"
  >
    <template #custom-name>
      <span class="Product__title">
        <span>{{ product.name }}</span>
      </span>
    </template>

    <template #default>
      <div class="Product__details">
        <div>
          <span class="Product__price">S/. {{ product?.base_price_sol }}</span>
          <p class="Product__description">{{ product?.description }}</p>
        </div>
      </div>
      <q-btn
        class="Product__cart-button"
        :color="isProductInCart ? 'negative' : 'accent'"
        :icon="isProductInCart ? 'remove_shopping_cart' : 'add_shopping_cart'"
        @click.stop="$emit('onAddToShoppingCart', product)"
      />
    </template>
  </detail-layout>
</template>

<script lang="ts" setup>
<<<<<<< HEAD
import DetailLayout from '../../components/DetailLayout';
=======
import DetailLayout from 'src/components/DetailLayout';
>>>>>>> 568bc37b88c080c3527b06e68dd0438fe3ac0ad2
import DIDLogo from 'src/assets/logos/didperu.svg';
import { Product } from 'src/utils';

interface ProductLayoutProps {
  product: Product;
  isProductInCart?: boolean;
}

interface ProductLayoutEmits {
  (eventName: 'onAddToShoppingCart', product: Product): void;
}

defineProps<ProductLayoutProps>();
defineEmits<ProductLayoutEmits>();
</script>
