<template>
  <div class="Provider">
    <header-with-search-bar
      :logo-url="provider?.logo_url || DIDLogo"
      :title="provider?.commercial_name"
      :query-value="searchText || ''"
      :has-products-on-cart="!!cartProducts?.length"
      show-search-bar
      show-shopping-cart
      @update:query-value="$emit('update:searchText', $event?.toString())"
      @on-search="$emit('onSearch')"
      @on-clear="$emit('onClear')"
    />
    <div class="Provider__container">
      <base-loading v-if="isLoading" />
      <provider-products
        v-else
        :cartProducts="cartProducts"
        :products="products"
        @on-add-to-shopping-cart="$emit('onAddToShoppingCart', $event)"
        @click-on-product="$emit('clickOnProduct', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseLoading, HeaderWithSearchBar } from 'src/components';
import { ProviderProducts } from './components';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './Provider.scss';

import { Product, Provider, ShoppingCart } from 'src/utils';

interface ProviderLayoutProps {
  id: string;
  provider?: Provider;
  products: Product[];
  searchText?: string;
  isLoading?: boolean;
  cartProducts?: ShoppingCart[];
}

interface ProviderLayoutEmits {
  (eventName: 'update:searchText', value?: string): void;
  (eventName: 'onSearch'): void;
  (eventName: 'onClear'): void;
  (eventName: 'onAddToShoppingCart', product: Product): void;
  (eventName: 'clickOnProduct', event: string): void;
}

defineProps<ProviderLayoutProps>();

defineEmits<ProviderLayoutEmits>();
</script>
