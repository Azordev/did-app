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
        v-else-if="products?.length"
        :cartProducts="cartProducts"
        :products="products"
        @on-add-to-shopping-cart="$emit('onAddToShoppingCart', $event)"
        @click-on-product="$emit('clickOnProduct', $event)"
      />
      <div class="Provider__no-products" v-else>
        <div class="Provider__no-products-text">
          <q-icon v-if="currentQuery" name="search" />
          <span>{{ notProductsMessage }}</span>
          <a :href="`mailto:${provider?.b2b_email}`">{{
            provider?.b2b_email
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseLoading, HeaderWithSearchBar } from 'src/components';
import { ProviderProducts } from './components';
import DIDLogo from 'src/assets/logos/didperu.svg';
import './Provider.scss';

import { Product, Provider, ShoppingCart } from 'src/utils';
import { computed } from 'vue';

interface ProviderLayoutProps {
  id: string;
  provider?: Provider;
  products: Product[];
  searchText?: string;
  currentQuery?: string;
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

const props = defineProps<ProviderLayoutProps>();
defineEmits<ProviderLayoutEmits>();

const notProductsMessage = computed(() => {
  if (props?.currentQuery) {
    return 'No se encontraron los productos que buscas, puedes contactar al proveedor directamente para preguntarle: ';
  }

  return 'Este proveedor aun no añade productos a su lista, puedes contactarlo para saber más: ';
});
</script>
