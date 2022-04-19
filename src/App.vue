<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { DefaultApolloClient, apolloClient } from './VueApollo.ts';

export default defineComponent({
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});
</script>
