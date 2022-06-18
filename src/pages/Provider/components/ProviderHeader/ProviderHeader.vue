<template>
  <div class="providerHeader">
    <div class="providerHeader__topContainer">
      <q-img class="providerHeader__img" :src="logoUrl" />
      <q-btn size="10px" round color="accent" icon="shopping_basket">
        <q-badge
          class="providerHeader__btnBadge"
          floating
          rounded
          color="red"
        />
      </q-btn>
    </div>
    <q-form class="providerHeader__form" @submit="$emit('onSearch')">
      <q-input
        bg-color="secondary"
        outlined
        placeholder="Buscar producto..."
        @update:model-value="$emit('update:queryValue', $event)"
        :model-value="queryValue"
        class="providerHeader__form_search"
        :rounded="false"
      />
      <q-btn
        unelevated
        type="submit"
        color="primary"
        icon="search"
        class="providerHeader__form_button"
      />
    </q-form>
  </div>
</template>

<script setup lang="ts">
interface ProviderHeaderProps {
  logoUrl: string;
  name: string;
  queryValue: string;
}

interface Emits {
  (eventName: 'update:queryValue', value: string | number | null): void;
  (eventName: 'onClear'): void;
  (eventName: 'onSearch'): void;
}

defineProps<ProviderHeaderProps>();

defineEmits<Emits>();
</script>
