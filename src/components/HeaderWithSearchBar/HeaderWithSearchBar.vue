<template>
  <div class="header">
    <div class="header__top-container">
      <q-img class="header__img" :src="logoUrl" v-if="logoUrl" />
      <h2 class="header__title" v-else>{{ title }}</h2>
      <q-btn
        @click="$router.push({ name: 'shoppingCart' })"
        size="10px"
        round
        color="accent"
        icon="shopping_basket"
        v-if="showShoppingCart"
      >
        <q-badge
          v-if="hasProductsOnCart"
          class="header__btn-badge"
          floating
          rounded
          color="red"
        />
      </q-btn>
    </div>
    <search-bar
      @on-search="$emit('onSearch')"
      @on-clear="$emit('onClear')"
      @update:query-value="$emit('update:queryValue', $event?.toString())"
      :queryValue="queryValue"
      placeholder="Buscar producto..."
    />
  </div>
</template>

<script setup lang="ts">
import SearchBar from 'src/components/SearchBar';
import './styles.scss';

interface ProviderHeaderProps {
  queryValue: string;
  logoUrl?: string;
  title?: string;
  showShoppingCart?: boolean;
  hasProductsOnCart?: boolean;
}

interface Emits {
  (eventName: 'update:queryValue', value?: string): void;
  (eventName: 'onClear'): void;
  (eventName: 'onSearch'): void;
}

defineProps<ProviderHeaderProps>();
defineEmits<Emits>();
</script>
