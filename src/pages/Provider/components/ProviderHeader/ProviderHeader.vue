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
    <search-bar
      @on-search="$emit('onSearch')"
      @on-clear="$emit('onClear')"
      @update:query-value="$emit('update:queryValue', $event)"
      :queryValue="queryValue"
      placeholder="Buscar producto..."
    />
  </div>
</template>

<script setup lang="ts">
import SearchBar from 'src/components/SearchBar';

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
