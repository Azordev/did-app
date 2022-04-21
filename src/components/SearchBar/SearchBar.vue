<template>
  <q-form @submit="$emit('onSearch')">
    <q-input
      outlined
      bottom-slots
      :model-value="queryValue"
      @update:model-value="$emit('update:queryValue', $event)"
      label="Busqueda"
    >
      <template v-slot:append>
        <q-icon
          v-if="queryValue !== ''"
          name="close"
          @click="$emit('onClear')"
          class="cursor-pointer"
        />
        <q-icon class="SearchBar__button" name="search" type="submit" />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-input>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    queryValue: {
      type: String,
      default: '',
    },
  },
  emit: ['update:queryValue', 'onClear'],
});
</script>
