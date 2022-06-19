<template>
  <div>
    <pre>
      {{ shoppingCart }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { handleShoppingCart } from 'src/utils';

const { shoppingCart } = handleShoppingCart();
</script>
