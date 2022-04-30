<template>
  <div :class="`${className} List`" v-if="listItemsLength && !isLoading">
    <slot></slot>
  </div>
  <div v-else-if="isLoading" class="flex flex-center">
    <q-spinner color="primary" size="3em" />
  </div>
  <div v-else>No se encontraron resultados para esta busqueda</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './ListGrid.scss';

export default defineComponent({
  name: 'ListGrid',
  components: {},
  props: {
    className: {
      type: String,
      default: '',
    },
    listItemsLength: {
      type: Number,
      default: 0,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
