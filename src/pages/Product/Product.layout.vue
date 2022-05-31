<template>
  <div class="Product__container">
    <h1 class="Product__name">{{ product.name }}</h1>
    <q-img class="Product__image" :src="product.image_url" />
    <div class="Product__details">
      <div>
        <span class="Product__price">S/. {{ product.base_price_sol }}</span>
        <p class="Product__description">{{ product.description }}</p>
      </div>
      <q-btn
        class="Product__cart_button"
        color="accent"
        icon="add_shopping_cart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { product } from 'src/utils';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Product',
  props: {
    product: {
      type: Object as PropType<product>,
      default: () => {
        return {};
      },
    },
  },
});
</script>
