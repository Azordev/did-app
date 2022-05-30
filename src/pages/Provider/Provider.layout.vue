<template>
  <div class="Provider">
    <provider-header
      :logo-url="provider.logo_url"
      :name="provider.commercial_name"
      @onSearch="$emit('onSearch')"
    />
    <div class="Provider__container">
      <suspense>
        <template #default>
          <provider-products :products="products" />
        </template>
        <template #fallback>
          <base-loading />
        </template>
      </suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BaseLoading } from '../../components/LoadingComponent';
import { getProductsByProvider } from '../../actions';
import providerHeader from './ProviderHeader.vue';
import ProviderProducts from './ProviderProducts.vue';
import { product } from 'src/utils';

export default defineComponent({
  name: 'ProviderLayout',
  props: {
    id: {
      type: String,
      default: '',
    },
    provider: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  emits: ['onSearch'],
  components: {
    ProviderProducts,
    BaseLoading,
    providerHeader,
  },
  async setup(props) {
    const products = ref<product[]>([]);

    if (props.id && typeof props.id === 'string') {
      await getProductsByProvider(props.id).then((res) => {
        console.log(res);
        products.value = res;
      });
    }

    return {
      getProductsByProvider,
      products,
    };
  },
});
</script>
