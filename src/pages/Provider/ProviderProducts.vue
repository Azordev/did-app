<template>
  <div class="ProviderProducts">
    <provider-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { product } from 'src/utils';
import { defineComponent, PropType } from 'vue';
import ProviderProduct from './ProviderProduct.vue';

export default defineComponent({
  name: 'ProviderProducts',
  props: {
    products: {
      type: Array as PropType<product[]>,
      default: () => {
        return [];
      },
    },
  },
  components: {
    ProviderProduct,
  },
});
</script>
