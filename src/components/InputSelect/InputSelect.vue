<template>
  <q-select
    filled
    :model-value="value"
    @update:model-value="$emit('onChange', $event)"
    :options="options"
    :option-label="optionLabel"
    :option-value="optionValue"
    stack-label
    :label="label"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
});
</script>
