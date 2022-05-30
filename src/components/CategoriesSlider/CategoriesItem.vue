<template>
  <div class="categoriesItem">
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
</template>

<script lang="ts">
import { provider_category } from 'src/utils';
import { defineComponent, PropType } from 'vue';
import './CategoriesSlider.scss';

export default defineComponent({
  name: 'CategoriesItem',
  props: {
    categories: {
      type: Array as PropType<provider_category[]>,
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
