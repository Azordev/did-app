<template>
  <div>
    <h1>{{ product.name }}</h1>
    <img :src="product.image_url" />
    <div>
      <div>
        <span>S/. {{ product.base_price_sol }}</span>
        <p>{{ product.details }}</p>
      </div>
      <q-btn
        class="ProductList__item_button"
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
