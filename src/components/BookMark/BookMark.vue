<template>
  <div class="BookMark">{{ label }}</div>
</template>

<script lang="ts">
import './styles.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookMark',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
});
</script>
