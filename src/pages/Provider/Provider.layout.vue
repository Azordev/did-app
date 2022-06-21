<template>
  <div class="Provider">
    <provider-header
      :logo-url="provider?.logo_url || DIDLogo"
      :name="provider?.commercial_name"
      :query-value="searchText || ''"
      :has-products-on-cart="!!cartProducts?.length"
      @update:query-value="$emit('update:searchText', $event?.toString())"
      @on-search="$emit('onSearch')"
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
import { BaseLoading } from 'src/components/LoadingComponent';
import { ProviderHeader, ProviderProducts } from './components';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './Provider.scss';

import { Product, Provider } from 'src/utils';

interface ProviderLayoutProps {
  id: string;
  provider?: Provider;
  products: Product[];
  searchText?: string;
  isLoading?: boolean;
  cartProducts?: Product[];
}

interface ProviderLayoutEmits {
  (eventName: 'update:searchText', value?: string): void;
  (eventName: 'onSearch'): void;
  (eventName: 'onAddToShoppingCart', product: Product): void;
  (eventName: 'clickOnProduct', event: string): void;
}

defineProps<ProviderLayoutProps>();

defineEmits<ProviderLayoutEmits>();
</script>
