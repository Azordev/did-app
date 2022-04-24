<template>
  <div class="ProductList" v-if="products.length && !isLoading">
    <product-list-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else-if="isLoading" class="flex flex-center">
    <q-spinner color="primary" size="3em" />
  </div>
  <div v-else>No se encontraron resultados para esta busqueda</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductListItem from './ProductListItem.vue';

export default defineComponent({
  name: 'ProductsList',
  components: {
    ProductListItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
