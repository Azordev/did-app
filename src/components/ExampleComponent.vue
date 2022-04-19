<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>

    <input name="newTodoItem" v-model="inputValue" />
    <button @click="createNewTodoItem">Click to add a new Todo item!</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext,
  computed,
  ref,
  toRef,
  Ref,
  ComponentPropsOptions,
} from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

function handleTodoItem({ emit }: SetupContext) {
  const inputValue = ref('');

  function modifyInputValue(value: string) {
    inputValue.value = value;
  }

  function createNewTodoItem() {
    emit('createTodoItem', inputValue.value);
  }

  return { inputValue, modifyInputValue, createNewTodoItem };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props, context) {
    return {
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos')),
      ...handleTodoItem(context),
    };
  },
});
</script>
