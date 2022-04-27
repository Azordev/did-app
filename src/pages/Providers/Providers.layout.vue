<template>
  <div class="Providers">
    <div class="Providers__header">Proveedores</div>

    <list-grid
      className="ProvidersList"
      :isLoading="isLoading"
      :listItemsLength="providers.length"
    >
      <providers-list-item
        v-for="provider in providers"
        :key="provider.id"
        :provider="provider"
        @onClick="
          $router.push({
            name: 'providerDetail',
            params: { provider: provider.id },
          })
        "
      />
    </list-grid>

    <div class="q-pa-lg flex flex-center">
      <page-pagination
        @onChangePage="$emit('onChangePage', $event)"
        :currentPage="currentPage"
        :totalPages="totalPages"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListGrid from '../../components/ListGrid';
import ProvidersListItem from './ProvidersListItem.vue';

export default defineComponent({
  name: 'ProductsLayout',
  components: { ListGrid, ProvidersListItem },
  emits: ['onChangePage'],
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    providers: {
      type: Array,
      default: () => [],
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
});
</script>
