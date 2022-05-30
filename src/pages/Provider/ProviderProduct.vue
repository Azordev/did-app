<template>
  <q-card class="ProviderProduct">
    <q-card-section class="ProviderProduct__card" horizontal>
      <div class="ProviderProduct__imgContainer">
        <q-img
          class="ProviderProduct__img"
          ratio="4/3"
          :src="product.image_url"
        />
      </div>

      <div class="ProviderProduct__name">
        <p>{{ product.name }}</p>
      </div>

      <q-card-section class="q-p-none ProviderProduct__checkoutInfo">
        <span class="ProviderProduct__price">
          <strong>S./ {{ product.base_price_sol }} </strong></span
        >
        <q-card-actions>
          <q-btn
            class="ProductList__item_button"
            color="accent"
            icon="add_shopping_cart"
          />
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
