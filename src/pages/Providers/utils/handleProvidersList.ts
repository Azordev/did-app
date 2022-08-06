import { getListOfProviders } from 'src/actions';
import { Provider } from 'src/utils';
import { ref } from 'vue';

export const handleProvidersList = () => {
  const isLoading = ref<boolean>(false);
  const providers = ref<Provider[]>([]);

  const getProvidersList = async (limit?: number) => {
    isLoading.value = true;

    const variables = {
      limit,
    };

    await getListOfProviders(variables).then((res) => {
      providers.value = res;
      isLoading.value = false;
    });
  };

  return {
    getProvidersList,
    isLoading,
    providers,
  };
};
