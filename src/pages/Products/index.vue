<template>
  <div>
    <products-layout
      :products="products"
      :totalProducts="totalProducts"
      :totalPages="totalPages"
      :isLoading="isLoading"
      v-model:current-page="currentPage"
      v-model:query-value="searchText"
      @onSearch="getProductList(1, searchText)"
      @onClear="getProductList(1, '')"
      @onChangePage="getProductList($event, query)"
    />
  </div>
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

  const getProductList = (_currentPage: number, _query: string) => {
    isLoading.value = true;
    currentPage.value = _currentPage;
    query.value = _query;

    const offset = getOffset({
      currentPage: currentPage.value,
      limit: limit.value,
    });

    const variables = {
      offset,
      limit: limit.value,
      query: query.value,
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
      getProductList,
    } = handleProductList();

    getProductList(currentPage.value, query.value);

    return {
      products,
      query,
      limit,
      totalProducts,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      getProductList,
    };
  },
});
</script>
