import { Provider } from 'src/utils';
import { useRoute, useRouter } from 'vue-router';
import { getSpecificProvider } from 'src/actions';
import { ref } from 'vue';
import { Notify } from 'quasar';

export const getProviderById = async () => {
  const provider = ref<Provider>();
  const route = useRoute();
  const id = route.params.provider as string;

  await getSpecificProvider(id).then((res) => {
    provider.value = res;

    if (!provider.value) {
      const router = useRouter();

      Notify.create({
        message: 'Tuvimos problemas para encontrar al proveedor',
        type: 'negative',
      });

      router.back();
    }
  });

  return {
    id,
    provider,
  };
};
