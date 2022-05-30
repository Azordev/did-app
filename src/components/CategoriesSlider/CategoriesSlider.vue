<template>
  <div class="categoriesList">
    <categories-item
      :categorySelected="categorySelected"
      :categories="parsedCategories"
      @update:categorySelected="$emit('update:categorySelected', $event)"
    />
  </div>
</template>

<script lang="ts">
import { provider_category } from 'src/utils';
import { defineComponent, onUpdated, PropType, ref } from 'vue';
import CategoriesItem from './CategoriesItem.vue';

export default defineComponent({
  name: 'CategoriesList',
  components: {
    CategoriesItem,
  },
  props: {
    categories: {
      type: Array as PropType<provider_category[]>,
      default: () => {
        return [];
      },
    },
    categorySelected: {
      type: String,
      default: null,
    },
  },
  emits: ['update:categorySelected'],
  setup(props) {
    const parsedCategories = ref<provider_category[]>();

    onUpdated(() => {
      parsedCategories.value = [
        {
          category: {
            name: 'Todos',
            id: '',
          },
        },
        ...props.categories,
      ];
    });

    return {
      parsedCategories,
    };
  },
});
</script>
