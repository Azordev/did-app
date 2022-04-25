<template>
  <div>
    Providers:
    <div class="providersList">
      <div
        class="providerList__item"
        v-for="provider of providers"
        :key="provider.logo_url"
      >
        <img :src="provider.logo_url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getListOfProviders } from '../../actions';
import { handleListQuery } from '../../utils/apollo';
import './Providers.css';

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
