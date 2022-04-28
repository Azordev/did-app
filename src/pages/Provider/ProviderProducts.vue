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
import { defineComponent, ref } from 'vue';
import { getProductsByProvider } from '../../actions';
import ProviderProduct from './ProviderProduct.vue';

export default defineComponent({
  name: 'ProviderProducts',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  components: {
    ProviderProduct,
  },
  async setup(props) {
    const products = ref({});

    if (props.id && typeof props.id === 'string') {
      await getProductsByProvider(props.id).then((res) => {
        console.log(res);
        products.value = res;
      });
    }

    return {
      products,
    };
  },
});
</script>
