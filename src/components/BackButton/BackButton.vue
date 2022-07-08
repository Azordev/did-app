<template>
  <q-btn
    flat
    color="gray-dim"
    dense
    size="md"
    :icon="matArrowBackIosNew"
    :label="label"
    no-caps
    @click="toHome ? $router.push({ name: 'dashboard' }) : $router.back()"
  />
</template>

<script setup lang="ts">
import { matArrowBackIosNew } from '@quasar/extras/material-icons';

interface BackButtonProps {
  toHome?: boolean;
  label?: string;
}

defineProps<BackButtonProps>();
</script>
