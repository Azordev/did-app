<template>
  <q-form class="SearchBar__form" @submit="$emit('onSearch')">
    <q-input
      bg-color="secondary"
      outlined
      :placeholder="placeholder"
      @update:model-value="$emit('update:queryValue', $event)"
      :model-value="queryValue"
      class="SearchBar__input"
      :rounded="false"
    >
      <template v-slot:append>
        <q-icon
          v-if="queryValue?.length"
          name="close"
          @click="$emit('onClear')"
          class="cursor-pointer"
        />
      </template>
    </q-input>

    <q-btn
      unelevated
      type="submit"
      color="primary"
      icon="search"
      class="providerHeader__form_button"
    />
  </q-form>
</template>

<script setup lang="ts">
import './SearchBar.scss';

interface SearchBarProps {
  placeholder?: string;
  queryValue: string;
}

interface SearchBarEmits {
  (eventName: 'update:queryValue', value: string | number | null): void;
  (eventName: 'onSearch'): void;
  (eventName: 'onClear'): void;
}

defineProps<SearchBarProps>();
defineEmits<SearchBarEmits>();
</script>
