import { getListOfProviders } from 'src/actions';
import { Provider } from 'src/utils';
import { ref } from 'vue';

export const handleProvidersList = () => {
  const searchText = ref<string>('');
  const query = ref<string>();
  const isLoading = ref<boolean>(false);
  const providers = ref<Provider[]>([]);

  const getProvidersList = async (_query?: string, _limit?: number) => {
    isLoading.value = true;

    const variables = {
      query: _query,
      limit: _limit,
    };

    await getListOfProviders(variables).then((res) => {
      query.value = _query;
      providers.value = res;
      isLoading.value = false;
    });
  };

  return {
    getProvidersList,
    searchText,
    query,
    isLoading,
    providers,
  };
};
