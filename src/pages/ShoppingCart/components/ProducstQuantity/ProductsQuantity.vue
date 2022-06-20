<template>
  <div class="ProductsQuantity">
    <q-btn flat dense rounded @click="$emit('onChange', quantity + 1)">+</q-btn>
    <q-input
      class="ProductsQuantity__input"
      bg-color="primary"
      color="secondary"
      dark
      dense
      :model-value="quantity"
    />
    <q-btn dense flat rounded @click="$emit('onChange', quantity - 1)">
      -
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import './ProductsQuantity.scss';

interface ProductsQuantityProps {
  quantity: number;
}

interface ProductsQuantityEmits {
  (eventName: 'onChange', value: number): void;
}

defineProps<ProductsQuantityProps>();
defineEmits<ProductsQuantityEmits>();
</script>
