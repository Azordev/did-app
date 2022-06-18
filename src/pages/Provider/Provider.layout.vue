<template>
  <div class="Provider">
    <provider-header
      :logo-url="provider?.logo_url"
      :name="provider?.commercial_name"
      :query-value="searchText"
      @update:query-value="$emit('update:searchText', $event)"
      @onSearch="$emit('onSearch')"
    />
    <div class="Provider__container">
      <base-loading v-if="isLoading" />
      <provider-products v-else :products="products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseLoading } from '../../components/LoadingComponent';
import { ProviderHeader, ProviderProducts } from './components';
import './Provider.scss';

import { Product, Provider } from 'src/utils';

interface ProviderLayoutProps {
  id: string;
  provider?: Provider;
  products: Product[];
  searchText: string;
  isLoading?: boolean;
}

interface ProviderLayoutEmits {
  (eventName: 'update:searchText', value: string | number | null): void;
  (eventName: 'onSearch'): void;
}

defineProps<ProviderLayoutProps>();

defineEmits<ProviderLayoutEmits>();
</script>
