<template>
  <providers-layout
    :isLoading="isLoading"
    :providers="providers"
    :totalPages="totalPages"
    :currentPage="currentPage"
    @onChangePage="getProductList($event, query.value, order_by.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getListOfProviders } from '../../actions';
import { handleListQuery } from '../../utils/apollo';
import ProvidersLayout from './Providers.layout.vue';
import './Providers.scss';

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

    getProductList(currentPage.value, query.value, order_by.value);

    return {
      providers,
      query,
      limit,
      totalProviders,
      totalPages,
      currentPage,
      isLoading,
      searchText,
      order_by,
      onClearSearch,
      getProductList,
    };
  },
});
</script>
