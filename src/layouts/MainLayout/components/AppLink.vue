<template>
  <router-link :to="to" custom v-slot="{ isExactActive, navigate }" exact>
    <q-btn
      :class="`navbar__button ${
        isSubRoute() || isExactActive ? 'navbar__button--active' : ''
      }`"
      @click="navigate"
      flat
    >
      <slot name="icon"></slot>
    </q-btn>
  </router-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import { PropType } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  to: {
    type: Object as PropType<RouteLocationRaw>,
  },
  subRoutes: {
    type: Array,
    default: () => [],
  },
});

const isSubRoute = () => {
  return props.subRoutes.includes(route.matched[1].name);
};
</script>
