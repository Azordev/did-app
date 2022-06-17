import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Product } from 'src/utils';
import { getProductById } from '../../../actions/ProductsActions';

export const handleProductQuery = () => {
  const route = useRoute();
  const product = ref<Product>();
  const isLoading = ref<boolean>(false);
  const productId = route.params.id as string;

  const getProductDetail = async (id: string) => {
    isLoading.value = true;
    await getProductById(id).then((result) => {
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
