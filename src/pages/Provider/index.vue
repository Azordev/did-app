<template>
  <provider-layout :id="id" :provider="provider" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getSpecificProvider } from '../../actions';
import ProviderLayout from './Provider.layout.vue';
import './Provider.scss';

const getProviderById = () => {
  const provider = ref({});
  const route = useRoute();
  const id = route.params.provider as string;

  getSpecificProvider(id).then((res) => {
    provider.value = res;
  });

  return {
    id,
    provider,
  };
};

export default defineComponent({
  name: 'Provider',
  components: {
    ProviderLayout,
  },
  setup() {
    const { provider, id } = getProviderById();

    return {
      provider,
      id,
    };
  },
});
</script>
