<template>
  <back-button />
  <base-loading v-if="isLoading" />
  <product-layout :product="product" v-else />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductLayout from './Product.layout.vue';
import { BaseLoading } from '../../components/LoadingComponent';
import BackButton from '../../components/BackButton';
import { getProductById } from '../../actions/ProductsActions';
import { product } from 'src/utils';
import './Product.scss';

const handleProductQuery = () => {
  const route = useRoute();
  const product = ref<product>();
  const isLoading = ref<boolean>(false);
  const productId = route.params.id as string;

  const getProductDetail = (id: string) => {
    isLoading.value = true;
    getProductById(id).then((result) => {
      product.value = result;
      isLoading.value = false;
    });
  };

  return {
    product,
    isLoading,
    productId,
    getProductDetail,
  };
};

export default defineComponent({
  name: 'Product',
  components: {
    ProductLayout,
    BaseLoading,
    BackButton,
  },
  setup() {
    const { product, isLoading, productId, getProductDetail } =
      handleProductQuery();

    getProductDetail(productId);

    return {
      isLoading,
      product,
    };
  },
});
</script>
