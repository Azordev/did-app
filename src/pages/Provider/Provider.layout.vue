<template>
  <div class="Provider">
    <provider-header
      :logo-url="provider.logo_url"
      :name="provider.commercial_name"
      v-model:query-value="searchText"
      @onSearch="getProductLists(id, searchText)"
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
import { defineComponent, PropType, ref } from 'vue';
import { BaseLoading } from '../../components/LoadingComponent';
import { getProductsByProvider } from '../../actions';
import providerHeader from './ProviderHeader.vue';
import ProviderProducts from './ProviderProducts.vue';
import { product, provider } from 'src/utils';

const handleProviderProducts = () => {
  const products = ref<product[]>([]);
  const query = ref<string>('');
  const searchText = ref<string>('');

  const getProductLists = async (id: string, query: string) => {
    if (id) {
      await getProductsByProvider(id, query).then((res) => {
        products.value = res;
      });
    }
  };

  return {
    getProductLists,
    query,
    products,
    searchText,
  };
};

export default defineComponent({
  name: 'ProviderLayout',
  props: {
    id: {
      type: String,
      default: '',
    },
    provider: {
      type: Object as PropType<provider>,
      default: () => {
        return {};
      },
    },
  },
  components: {
    ProviderProducts,
    BaseLoading,
    providerHeader,
  },
  async setup(props) {
    const { getProductLists, query, products, searchText } =
      handleProviderProducts();

    getProductLists(props.id, query.value);

    return {
      getProductLists,
      products,
      query,
      searchText,
    };
  },
});
</script>
