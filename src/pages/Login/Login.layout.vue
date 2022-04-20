<template>
  <q-form
    @submit="() => onSubmit({ email: emailValue, password: passwordValue })"
    class="q-gutter-md"
  >
    <q-input
      filled
      :label="emailAttrs.label"
      :hint="emailAttrs.hint"
      :type="emailAttrs.type"
      :model-value="emailValue"
      @update:model-value="$emit('update:emailValue', $event)"
      lazy-rules
      :rules="emailValidations"
    />

    <q-input
      filled
      :label="passwordAttrs.label"
      :hint="passwordAttrs.hint"
      :type="passwordAttrs.type"
      :model-value="passwordValue"
      @update:model-value="$emit('update:passwordValue', $event)"
      lazy-rules
      :rules="passwordValidations"
    />

    {{ emailValue }}

    <q-toggle v-model="accept" label="I accept the license and terms" />

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    onSubmit: {
      type: Function,
      default: () => {
        return {};
      },
    },
    emailValue: {
      type: String,
      default: '',
    },
    emailAttrs: {
      type: Object,
      default: () => {
        return {
          label: 'Your email',
          hint: 'example@example.com',
          type: 'text',
        };
      },
    },
    passwordValue: {
      type: String,
      default: '',
    },
    passwordAttrs: {
      type: Object,
      default: () => {
        return {
          label: 'Your password',
          hint: '',
          type: 'password',
        };
      },
    },
    emailValidations: {
      type: Array,
      default: () => [],
    },
    passwordValidations: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:emailValue', 'update:passwordValue'],
});
</script>
