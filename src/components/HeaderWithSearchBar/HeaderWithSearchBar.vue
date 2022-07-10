<template>
  <div class="header-with-search-bar">
    <div class="header-with-search-bar__top-container">
      <q-img
        class="header-with-search-bar__img"
        :src="logoUrl"
        v-if="logoUrl"
      />
      <h2 class="header-with-search-bar__title" v-else>{{ title }}</h2>
      <q-btn
        class="header-with-search-bar__cart-btn"
        @click="$router.push({ name: 'shoppingCart' })"
        size="10px"
        round
        color="accent"
        v-if="showShoppingCart"
      >
        <shopping-cart-icon :width="15.67" :height="19.76" />
        <q-badge
          v-if="hasProductsOnCart"
          class="header-with-search-bar__btn-badge"
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
      class="header-with-search-bar__input"
    />
  </div>
</template>

<script setup lang="ts">
import SearchBar from 'src/components/SearchBar';
import shoppingCartIcon from './assets/shoppingCartIcon.vue';
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
