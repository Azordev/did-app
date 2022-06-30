<template>
  <providers-layout
    :isLoading="isLoading"
    :providers="providers"
    v-model:query-value="searchText"
    @onClear="onClearSearch()"
    @onSearch="getProvidersList(1, searchText, order_by)"
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
      getItemsList: getProvidersList,
    } = handleListQuery(getListOfProviders);

    getProvidersList(currentPage.value, query.value, order_by.value);

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
      getProvidersList,
    };
  },
});
</script>
