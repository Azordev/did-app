<template>
  <div class="providerHeader">
    <div class="providerHeader__topContainer">
      <q-img class="providerHeader__img" :src="logoUrl" />
      <q-btn
        @click="$router.push({ name: 'shoppingCart' })"
        size="10px"
        round
        color="accent"
        icon="shopping_basket"
      >
        <q-badge
          v-if="hasProductsOnCart"
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
  queryValue: string;
  hasProductsOnCart?: boolean;
}

interface Emits {
  (eventName: 'update:queryValue', value: string | number | null): void;
  (eventName: 'onClear'): void;
  (eventName: 'onSearch'): void;
}

defineProps<ProviderHeaderProps>();

defineEmits<Emits>();
</script>
