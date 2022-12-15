<template>
  <div class="login__container">
    <header>
      <img class="login__logo" :src="didLogo" alt="DID Logo" />
    </header>
    <main>
      <div class="login__caption">
        <p>Ingresa a DID Perú</p>
      </div>
      <q-form
        @submit="
          () =>
            onSubmit({ member_code: usernameValue, password: passwordValue })
        "
        class="q-gutter-md"
      >
        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Código de socio"
          :label="usernameAttrs?.label"
          :hint="usernameAttrs?.hint"
          :type="usernameAttrs?.type"
          :model-value="usernameValue"
          @update:model-value="$emit('update:usernameValue', $event)"
          lazy-rules
          :rules="usernameValidations"
        />

        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Contraseña"
          :label="passwordAttrs?.label"
          :hint="passwordAttrs?.hint"
          :type="passwordAttrs?.type"
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
            class="full-width login__submit"
          />
        </div>
      </q-form>
      <div class="login__other_links">
        <a class="login__forgotten_link" href="mailto:adidperu@gmail.com"
          >¿Olvidaste tu contraseña?</a
        >
        <button class="login__get_account" @click="createAccount">
          Crear cuenta
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import didLogo from 'src/assets/logos/didperu.svg';
import { QInputProps } from 'quasar';
import { useRouter } from 'vue-router';

const router = useRouter();

const createAccount = () => {
  router.push({ name: 'signup' });
};

interface InputAttrsProps {
  label: QInputProps['label'];
  hint: QInputProps['hint'];
  type: QInputProps['type'];
}

interface LoginLayoutProps {
  onSubmit: (userData: { member_code: string; password: string }) => void;
  usernameValue: string;
  usernameAttrs?: InputAttrsProps;
  passwordValue: string;
  passwordAttrs?: InputAttrsProps;
  termsAndConditions: boolean;
  isLoading: boolean;
  usernameValidations: ((value: string) => boolean | string)[];
  passwordValidations: ((value: string) => boolean | string)[];
}

interface LoginLayoutEmits {
  (eventName: 'update:usernameValue', value?: string | number | null): void;
  (eventName: 'update:passwordValue', value?: string | number | null): void;
  (eventName: 'termsAndConditions', value?: boolean): void;
}

defineProps<LoginLayoutProps>();
defineEmits<LoginLayoutEmits>();
</script>
