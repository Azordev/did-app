<template>
  <providers-layout
    :isLoading="isLoading"
    :providers="providers"
    :totalPages="totalPages"
    :currentPage="currentPage"
    :categories="categories"
    :categorySelected="categorySelected"
    v-model:query-value="searchText"
    @onClear="onClearSearch()"
    @onSearch="getProductList(1, searchText, order_by)"
    @onSelectCategory="onSelectProvidersCategory"
  />
</template>

<script lang="ts">
import { provider_category } from 'src/utils';
import { defineComponent, ref } from 'vue';
import { getListOfProviders, getProvidersCategories } from '../../actions';
import { handleListQuery } from '../../utils/apollo';
import ProvidersLayout from './Providers.layout.vue';
import './Providers.scss';

const handleProvidersCategories = () => {
  const categories = ref<provider_category[]>([]);
  const categorySelected = ref<string>();

  getProvidersCategories().then((res) => {
    categories.value = res;
  });

  const onSelectProvidersCategory = (newCategoryId: string) => {
    /** Add here logic to filter by category */

    categorySelected.value = newCategoryId;
  };

  return { categories, categorySelected, onSelectProvidersCategory };
};

export default defineComponent({
  name: 'Providers',
  components: {
    ProvidersLayout,
  },
  setup() {
    const {
      items: providers,
      limit,
      query,
      totalItems: totalProviders,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      onClearSearch,
      getItemsList: getProductList,
    } = handleListQuery(getListOfProviders);

    const { categories, categorySelected, onSelectProvidersCategory } =
      handleProvidersCategories();

    getProductList(currentPage.value, query.value, order_by.value);

    return {
      providers,
      categories,
      query,
      limit,
      totalProviders,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      categorySelected,
      onSelectProvidersCategory,
      onClearSearch,
      getProductList,
    };
  },
});
</script>
