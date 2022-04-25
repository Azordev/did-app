<template>
  <div>
    Providers:
    <div class="providersList">
      <div
        class="providersList__item"
        v-for="provider of providers"
        :key="provider.logo_url"
      >
        <img :src="provider.logo_url" />
      </div>
    </div>

    Data:
    <ul>
      <li>Total: {{ totalProviders }}</li>
      <li>isLoading: {{ isLoading }}</li>
      <li>CurrentPage: {{ currentPage }}</li>
      <li>TotalPages: {{ totalPages }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getListOfProviders } from '../../actions';
import { handleListQuery } from '../../utils/apollo';
import './Providers.scss';

export default defineComponent({
  name: 'Providers',
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
