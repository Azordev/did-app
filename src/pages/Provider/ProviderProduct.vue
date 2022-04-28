<template>
  <q-card class="ProviderProduct">
    <q-card-section horizontal>
      <q-img
        class="ProviderProduct__img"
        ratio="4/3"
        :src="product.image_url"
      />

      <q-card-section>
        <div class="text-h6">{{ product.name }}</div>

        <q-card-section class="q-pt-none">
          {{ product.description }}
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span class="ProviderProduct__price">{{
            product.base_price_sol
          }}</span>
          Soles
        </q-card-section>

        <q-card-actions align="center">
          <q-btn class="ProductList__item_button" color="primary"
            >Comprar ahora</q-btn
          >
        </q-card-actions>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProviderProduct',
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
