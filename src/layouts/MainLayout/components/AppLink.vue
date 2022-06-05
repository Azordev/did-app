<template>
  <router-link :to="to" custom v-slot="{ isExactActive, navigate }" exact>
    <q-btn
      :class="`navbar__button ${isExactActive ? 'navbar__button--active' : ''}`"
      @click="navigate"
      flat
    >
      <slot name="icon"></slot>
      <span class="navbar__text">{{ title }}</span>
    </q-btn>
  </router-link>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core';
import { RouteLocationRaw } from 'vue-router';

export default {
  name: 'AppLink',
  props: {
    to: {
      type: Object as PropType<RouteLocationRaw>,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
