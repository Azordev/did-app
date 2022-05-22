<template>
  <div class="Providers">
    <back-button />

    <div class="Providers__content">
      <search-bar class="Providers__search" />

      <div class="Providers__header">
        <div class="Providers__categoriesList">
          <!-- TODO: Add categoriesList -->
        </div>
      </div>

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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListGrid from '../../components/ListGrid';
import BackButton from '../../components/BackButton';
import SearchBar from '../../components/SearchBar';
import ProvidersListItem from './ProvidersListItem.vue';

export default defineComponent({
  name: 'ProductsLayout',
  components: { ListGrid, ProvidersListItem, BackButton, SearchBar },
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
