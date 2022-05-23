<template>
  <q-btn
    flat
    color="gray-dim"
    dense
    size="md"
    :icon="arrowIcon"
    :label="toHome ? 'Inicio' : 'Atrás'"
    no-caps
    @click="toHome ? $router.push({ name: 'dashboard' }) : $router.back()"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { matArrowBackIosNew } from '@quasar/extras/material-icons';

export default defineComponent({
  name: 'SearchBar',
  emits: ['onChange'],
  props: {
    toHome: {
      type: Boolean,
      default: false,
    },
  },
  emit: ['update:queryValue', 'onClear'],
  setup() {
    return { arrowIcon: matArrowBackIosNew };
  },
});
</script>
