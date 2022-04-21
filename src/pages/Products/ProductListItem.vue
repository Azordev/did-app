<template>
  <div class="ProductList__item">
    <q-card class="my-card">
      <img :src="product.image_url" />

      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">
          {{ product.provider.commercial_name }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ product.description }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        <span class="ProductList__item_price">{{
          product.base_price_sol
        }}</span>
        Soles
      </q-card-section>

      <q-card-actions align="center">
        <q-btn class="ProductList__item_button" color="primary"
          >Comprar ahora</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsListItem',
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
});
</script>
