<template>
  <div class="Products">
    <div class="Products__filters">
      <search-bar
        @on-search="$emit('onSearch')"
        @on-clear="$emit('onClear')"
        @update:query-value="$emit('update:queryValue', $event)"
        :query-value="queryValue"
      />
      <q-select
        filled
        :model-value="currentSortValue"
        @update:model-value="$emit('onSortList', $event)"
        :options="options"
        option-label="name"
        option-value="id"
        stack-label
        label="Single selection"
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
import { defineComponent, ref } from 'vue';
import ProductList from './ProductList.vue';
import SearchBar from '../../components/SearchBar/';
import PagePagination from '../../components/PagePagination.vue';

export default defineComponent({
  name: 'ProductsLayout',
  components: {
    PagePagination,
    ProductList,
    SearchBar,
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
    currentSortValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:queryValue', 'onChangePage', 'onSearch', 'onClear'],
  setup() {
    const options = ref([
      {
        name: 'Menor precio primero',
        id: 'order_by_price_asc',
      },
      {
        name: 'Mayor precio primero',
        id: 'order_by_price_desc',
      },
      {
        name: 'Ordenar alfabeticamente A-Z',
        id: 'order_by_name_asc',
      },
      {
        name: 'Ordenar alfabeticamente Z-A',
        id: 'order_by_name_desc',
      },
    ]);

    return { options };
  },
});
</script>
