import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Provider } from 'src/utils';
import { getSpecificProvider } from 'src/actions';

export const handleProviderQuery = () => {
  const route = useRoute();
  const provider = ref<Provider>();
  const providerId = route.params.provider as string;

  const getProviderDetail = async () => {
    await getSpecificProvider(providerId).then((result) => {
      provider.value = result;
    });
  };

  return {
    provider,
    providerId,
    getProviderDetail,
  };
};
