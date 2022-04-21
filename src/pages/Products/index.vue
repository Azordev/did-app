<template>
  <products-layout
    :products="products"
    :totalProducts="totalProducts"
    :totalPages="totalPages"
    :isLoading="isLoading"
    :currentSortValue="order_by"
    v-model:current-page="currentPage"
    v-model:query-value="searchText"
    @onSearch="getProductList(1, searchText, order_by)"
    @onClear="getProductList(1, '', order_by)"
    @onChangePage="getProductList($event, query, order_by)"
    @onSortList="getProductList(1, query, $event)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getListOfProducts } from '../../actions/ProductsActions';
import { getTotalPages, getOffset } from '../../utils/pagination';
import ProductsLayout from './Products.layout.vue';
import './Products.scss';

const handleProductList = () => {
  const products = ref<object[]>([]);
  const limit = ref<number>(10);
  const query = ref<string>('');
  const totalProducts = ref<number>(0);
  const totalPages = ref<number>(1);
  const currentPage = ref<number>(1);
  const isLoading = ref<boolean>(false);
  const searchText = ref<string>('');
  const order_by = ref<string>('');

  const getOrderByGraphQLVariables = (order_by: any): object => {
    const order_by_query = <any>{
      order_by_price: null,
      order_by_name: null,
    };

    switch (order_by.id) {
      case 'order_by_price_asc':
        order_by_query.order_by_price = 'asc';
        break;
      case 'order_by_price_desc':
        order_by_query.order_by_price = 'desc';
        break;
      case 'order_by_name_asc':
        order_by_query.order_by_name = 'asc';
        break;
      case 'order_by_name_desc':
        order_by_query.order_by_name = 'desc';
        break;
    }

    return order_by_query;
  };

  const getProductList = (
    _currentPage: number,
    _query: string,
    _order_by: string
  ) => {
    isLoading.value = true;
    currentPage.value = _currentPage;
    query.value = _query;
    order_by.value = _order_by;

    const offset = getOffset({
      currentPage: currentPage.value,
      limit: limit.value,
    });

    const variables = {
      offset,
      limit: limit.value,
      query: query.value,
      order_by: getOrderByGraphQLVariables(order_by.value),
    };

    getListOfProducts(variables)
      .then((result) => {
        products.value = result.products;

        totalProducts.value = result.totalProducts;

        totalPages.value = getTotalPages({
          totalItems: totalProducts.value,
          limit: limit.value,
        });

        isLoading.value = false;
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return {
    products,
    limit,
    query,
    totalProducts,
    totalPages,
    currentPage,
    isLoading,
    searchText,
    order_by,
    getProductList,
  };
};

export default defineComponent({
  name: 'Products',
  components: {
    ProductsLayout,
  },
  setup() {
    const {
      products,
      limit,
      query,
      totalProducts,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      getProductList,
    } = handleProductList();

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
      getProductList,
    };
  },
});
</script>
