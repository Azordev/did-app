<template>
  <q-btn class="button_custom" color="primary" type="button">{{ label }}</q-btn>
</template>

<script>
import './button.scss';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
