<template>
  <pre>
    {{ products }}
  </pre>
</template>

<script setup lang="ts">
import { Product } from 'src/utils';

interface ShoppingCartLayoutProps {
  products?: Product[];
}

defineProps<ShoppingCartLayoutProps>();
</script>
