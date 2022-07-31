<template>
  <div class="BookMark">{{ label }}</div>
</template>

<script setup lang="ts">
import './styles.scss';

interface BookMarkProps {
  label: string;
}

defineProps<BookMarkProps>();
</script>
