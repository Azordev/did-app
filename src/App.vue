<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { DefaultApolloClient, apolloClient } from './VueApollo';

export default defineComponent({
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  height: 100%;
}

#q-app {
  height: 100%;
}
</style>
