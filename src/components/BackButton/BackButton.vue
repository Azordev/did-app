<template>
  <q-btn
    flat
    color="gray-dim"
    dense
    size="md"
    :icon="arrowIcon"
    :label="backButtonText"
    no-caps
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { matArrowBackIosNew } from '@quasar/extras/material-icons';
import { useRouter } from 'vue-router';

const getButtonText = () => {
  const router = useRouter();
  const backButtonText = ref<string>('Atrás');

  const homeRoute = router.resolve({ name: 'dashboard' }).fullPath;
  const previousRoute = window.history.state.back;

  if (homeRoute === previousRoute) {
    backButtonText.value = 'Inicio';
  }

  return { backButtonText };
};

export default defineComponent({
  name: 'SearchBar',
  emits: ['onChange'],
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionLabel: {
      type: String,
      default: null,
    },
    optionValue: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: 'Selecciona una opcion',
    },
  },
  emit: ['update:queryValue', 'onClear'],
  setup() {
    const { backButtonText } = getButtonText();

    return { arrowIcon: matArrowBackIosNew, backButtonText };
  },
});
</script>
