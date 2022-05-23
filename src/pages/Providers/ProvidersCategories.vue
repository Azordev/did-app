<template>
  <div class="Providers__categoriesList">
    <div class="Providers__categoriesItem">
      <q-chip
        :selected="!categorySelected"
        @update:selected="$emit('update:categorySelected', null)"
        color="white-flight"
        text-color="gray-dim"
      >
        Todos
      </q-chip>
      <template :key="category.id" v-for="category of categories">
        <q-chip
          :selected="categorySelected === category.category.id"
          @update:selected="
            $emit('update:categorySelected', category.category.id)
          "
          color="white-flight"
          text-color="gray-dim"
        >
          {{ category.category.name }}
        </q-chip>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsLayout',
  props: {
    categories: {
      type: Array,
      default: () => {
        return [];
      },
    },
    categorySelected: {
      type: String,
      default: '',
    },
  },
  emits: ['update:categorySelected'],
});
</script>
