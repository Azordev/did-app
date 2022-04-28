<template>
  <div class="providerHeader">
    <div class="providerHeader__backBtn" @click="$router.back()">
      <img
        src="https://img.icons8.com/material-outlined/48/FFFFFF/back--v1.png"
      />
    </div>
    <q-img class="providerHeader__img" ratio="16/9" :src="logoUrl" />
    <div class="providerHeader__name">{{ name }}</div>
  </div>
  <q-tabs
    :model-value="tabValue"
    @update:model-value="$emit('update:tabValue', $event)"
    dense
    narrow-indicator
    align="justify"
    class="text-black providerHeader__tabs"
    :breakpoint="0"
  >
    <q-tab name="history" label="Historia" />
    <q-tab name="products" label="Productos" />
  </q-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProviderProducts',
  props: {
    tabValue: {
      type: String,
      default: 'history',
    },
    logoUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['update:tabValue'],
});
</script>
