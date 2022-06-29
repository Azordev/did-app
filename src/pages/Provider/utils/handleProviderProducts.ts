import { Notify } from 'quasar';
import { getProductsByProvider } from 'src/actions';
import { Product } from 'src/utils';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const handleProviderProducts = () => {
  const products = ref<Product[]>([]);
  const query = ref<string>('');
  const searchText = ref<string>('');
  const isLoading = ref<boolean>(false);

  const getProductLists = async (id: string, query: string) => {
    if (!id) {
      const router = useRouter();

      Notify.create({
        message:
          'Ocurrió un error, asegurate de que el Proveedor que seleccionaste existe',
        type: 'negative',
      });

      router.back();

      return;
    }

    isLoading.value = true;

    await getProductsByProvider(id, query).then((res) => {
      products.value = res;
      isLoading.value = false;
    });
  };

  return {
    getProductLists,
    query,
    products,
    searchText,
    isLoading,
  };
};
