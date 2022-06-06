<template>
  <home-layout :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeLayout from './Home.layout.vue';
import { user } from './mock';

export default defineComponent({
  name: 'Home',
  components: {
    HomeLayout,
  },
  setup() {
    return { user };
  },
});
</script>
