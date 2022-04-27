<template>
  <div class="Products">
    <div class="Products__filters">
      <search-bar
        @on-search="$emit('onSearch')"
        @on-clear="$emit('onClear')"
        @update:query-value="$emit('update:queryValue', $event)"
        :query-value="queryValue"
      />
      <input-select
        :value="sortSelectValue"
        :options="sortSelectOptions"
        option-label="label"
        option-value="label"
        label="Single selection"
        @onChange="$emit('onSortList', $event)"
      />
    </div>

    <product-list :isLoading="isLoading" :products="products" />

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
import ProductList from './ProductList.vue';
import SearchBar from '../../components/SearchBar/';
import PagePagination from '../../components/PagePagination.vue';
import InputSelect from '../../components/InputSelect';

export default defineComponent({
  name: 'ProductsLayout',
  components: {
    PagePagination,
    ProductList,
    SearchBar,
    InputSelect,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    queryValue: {
      type: String,
      default: '',
    },
    totalProducts: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    sortSelectValue: {
      type: String,
      default: '',
    },
    sortSelectOptions: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['update:queryValue', 'onChangePage', 'onSearch', 'onClear'],
});
</script>
