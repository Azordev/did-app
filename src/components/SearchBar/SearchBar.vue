<template>
  <q-form @submit="$emit('onSearch')">
    <q-input
      class="SearchBar"
      outlined
      :rounded="rounded"
      bottom-slots
      :model-value="queryValue"
      @update:model-value="$emit('update:queryValue', $event)"
      :label="placeholder"
    >
      <template v-slot:append>
        <q-icon
          v-if="queryValue !== ''"
          name="close"
          @click="$emit('onClear')"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:prepend>
        <q-icon class="SearchBar__button" name="search" type="submit" />
      </template>
    </q-input>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './SearchBar.scss';

export default defineComponent({
  name: 'SearchBar',
  props: {
    queryValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Buscar...',
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
  emit: ['update:queryValue', 'onClear'],
});
</script>
