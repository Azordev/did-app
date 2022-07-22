<template>
  <router-link :to="to" custom v-slot="{ isExactActive, navigate }" exact>
    <q-btn
      :class="`navbar__button ${isExactActive ? 'navbar__button--active' : ''}`"
      @click="navigate"
      flat
    >
      <slot name="icon"></slot>
    </q-btn>
  </router-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

interface AppLinkProps {
  to: RouteLocationRaw;
}

defineProps<AppLinkProps>();
</script>
