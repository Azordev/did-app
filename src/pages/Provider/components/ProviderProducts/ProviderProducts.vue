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
import { Product } from 'src/utils';
import { defineComponent, PropType } from 'vue';
import ProviderProduct from '../ProviderProduct';

export default defineComponent({
  name: 'ProviderProducts',
  props: {
    products: {
      type: Array as PropType<Product[]>,
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
