<template>
  <div class="login__container">
    <header>
      <img class="login__logo" :src="didLogo" alt="DID Logo" />
    </header>
    <main>
      <div class="login__caption">
        <p>Ingresa a DID Peru</p>
      </div>
      <q-form
        @submit="
          () =>
            onSubmit({ member_code: usernameValue, password: passwordValue })
        "
        class="q-gutter-md"
      >
        <q-input
          input-class="login__input"
          rounded
          color="black"
          outlined
          :label="usernameAttrs.label"
          :hint="usernameAttrs.hint"
          :type="usernameAttrs.type"
          :model-value="usernameValue"
          @update:model-value="$emit('update:usernameValue', $event)"
          lazy-rules
          :rules="usernameValidations"
        />

        <q-input
          input-class="login__input"
          rounded
          color="black"
          outlined
          :label="passwordAttrs.label"
          :hint="passwordAttrs.hint"
          :type="passwordAttrs.type"
          :model-value="passwordValue"
          @update:model-value="$emit('update:passwordValue', $event)"
          lazy-rules
          :rules="passwordValidations"
        />
        <div>
          <q-btn
            label="Ingresar"
            type="submit"
            :loading="isLoading"
            color="black"
            unelevated
            rounded
            class="full-width login__submit"
          />
        </div>
      </q-form>
      <div class="login__other_links">
        <a class="login__forgotten_link" href="mailto:adidperu@gmail.com"
          >¿Olvidaste tu contraseña?</a
        >
        <a class="login__get_account" href="mailto:adidperu@gmail.com">
          ¿Deseas asociarte a DID Perú?
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import didLogo from '../../assets/logos/didperu.svg';

export default defineComponent({
  props: {
    onSubmit: {
      type: Function,
      default: () => {
        return {};
      },
    },
    usernameValue: {
      type: String,
      default: '',
    },
    usernameAttrs: {
      type: Object,
      default: () => {
        return {
          label: 'Código de socio',
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
          label: 'Contraseña',
          type: 'password',
        };
      },
    },
    termsAndConditions: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    usernameValidations: {
      type: Array,
      default: () => [],
    },
    passwordValidations: {
      type: Array,
      default: () => [],
    },
  },
  emits: [
    'update:usernameValue',
    'update:passwordValue',
    'update:termsAndConditions',
  ],
  setup() {
    return {
      didLogo,
    };
  },
});
</script>
