<template>
  <q-pagination
    :model-value="currentPage"
    @update:model-value="$emit('onChangePage', $event)"
    color="black"
    :max="totalPages"
    :max-pages="5"
    :boundary-numbers="false"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagePagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
  },
  emit: ['onChangePage'],
});
</script>
