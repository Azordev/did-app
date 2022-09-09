<template>
  <q-btn
    flat
    color="black"
    dense
    :align="'left'"
    size="md"
    :icon="matArrowBackIosNew"
    :label="label"
    no-caps
    @click="toHome ? $router.push({ name: 'dashboard' }) : $router.back()"
  />
</template>

<script setup lang="ts">
import { matArrowBackIosNew } from '@quasar/extras/material-icons';
import './styles.scss';

interface BackButtonProps {
  toHome?: boolean;
  label?: string;
}

defineProps<BackButtonProps>();
</script>
