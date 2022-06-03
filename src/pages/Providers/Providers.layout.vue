<template>
  <div class="Providers">
    <back-button toHome />

    <div class="Providers__content">
      <search-bar
        @on-search="$emit('onSearch')"
        @on-clear="$emit('onClear')"
        @update:query-value="$emit('update:queryValue', $event)"
        :query-value="queryValue"
        class="Providers__search"
      />
      <providers-categories
        :categorySelected="categorySelected"
        :categories="categories"
        @update:categorySelected="$emit('onSelectCategory', $event)"
      />

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
import ProvidersCategories from '../../components/CategoriesSlider/CategoriesSlider.vue';

export default defineComponent({
  name: 'ProductsLayout',
  components: {
    ListGrid,
    ProvidersListItem,
    BackButton,
    SearchBar,
    ProvidersCategories,
  },
  emits: ['onSelectCategory', 'update:queryValue', 'onClear', 'onSearch'],
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
    categories: {
      type: Array,
      default: () => [],
    },
    categorySelected: {
      type: String,
      default: '',
    },
    queryValue: {
      type: String,
      default: '',
    },
  },
});
</script>
