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
      <q-btn
        :disabled="isLoading"
        class="Provider__filter-btn"
        color="accent"
        dense
        no-caps
        outline
      >
        <div class="Provider__filter-btn-content">
          <q-icon
            class="Provider__filter-btn-icon"
            size="14px"
            name="filter_alt"
          />
          Filtrar
        </div>
        <q-menu transition-show="jump-down" transition-hide="jump-up">
          <q-list style="min-width: 100px">
            <q-item>
              <q-item-section>
                Precio maximo
                <q-input
                  prefix="S/."
                  type="number"
                  dense
                  :model-value="maxPriceFilter"
                  @update:model-value="$emit('update:maxPriceFilter', $event)"
                  rounded
                  outlined
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                Precio minimo
                <q-input
                  type="number"
                  prefix="S/."
                  dense
                  :model-value="minPriceFilter"
                  @update:model-value="$emit('update:minPriceFilter', $event)"
                  rounded
                  outlined
                />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-btn color="accent" rounded>Buscar</q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
  maxPriceFilter?: number;
  minPriceFilter?: number;
}

interface ProviderLayoutEmits {
  (eventName: 'update:searchText', value?: string): void;
  (eventName: 'onSearch'): void;
  (eventName: 'onClear'): void;
  (eventName: 'onAddToShoppingCart', product: Product): void;
  (eventName: 'clickOnProduct', event: string): void;
  (eventName: 'update:maxPriceFilter', value: number): void;
  (eventName: 'update:minPriceFilter', value: number): void;
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
