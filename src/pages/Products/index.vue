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
    value: null,
    name: 'none_filter',
  },
  {
    label: 'Menor precio primero',
    value: 'asc',
    name: 'order_by_price',
  },
  {
    label: 'Mayor precio primero',
    value: 'desc',
    name: 'order_by_price',
  },
  {
    label: 'Ordenar alfabeticamente A-Z',
    value: 'asc',
    name: 'order_by_name',
  },
  {
    label: 'Ordenar alfabeticamente Z-A',
    value: 'desc',
    name: 'order_by_name',
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
