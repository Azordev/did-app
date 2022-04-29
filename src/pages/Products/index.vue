<template>
  <products-layout
    :products="products"
    :totalProducts="totalProducts"
    :totalPages="totalPages"
    :isLoading="isLoading"
    :sortSelectValue="order_by"
    :sortSelectOptions="options"
    v-model:current-page="currentPage"
    v-model:query-value="searchText"
    @onSearch="getProductList(1, searchText, order_by)"
    @onClear="onClearSearch()"
    @onChangePage="getProductList($event, query, order_by)"
    @onSortList="getProductList(1, query, $event)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getListOfProducts } from '../../actions/ProductsActions';
import { handleListQuery } from '../../utils/apollo';
import ProductsLayout from './Products.layout.vue';
import './Products.scss';

const options = ref([
  {
    label: 'No ordenar',
    content: null,
    column: null,
  },
  {
    label: 'Menor precio primero',
    content: 'asc',
    column: 'base_price_sol',
  },
  {
    label: 'Mayor precio primero',
    content: 'desc',
    column: 'base_price_sol',
  },
  {
    label: 'Ordenar alfabeticamente A-Z',
    content: 'asc',
    column: 'name',
  },
  {
    label: 'Ordenar alfabeticamente Z-A',
    content: 'desc',
    column: 'name',
  },
]);

export default defineComponent({
  name: 'Products',
  components: {
    ProductsLayout,
  },
  setup() {
    const {
      items: products,
      limit,
      query,
      totalItems: totalProducts,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      onClearSearch,
      getItemsList: getProductList,
    } = handleListQuery(getListOfProducts);

    getProductList(currentPage.value, query.value, order_by.value);

    return {
      products,
      query,
      limit,
      totalProducts,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      options,
      onClearSearch,
      getProductList,
    };
  },
});
</script>
