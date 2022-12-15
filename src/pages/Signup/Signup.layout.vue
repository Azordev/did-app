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
            onSubmit({
              full_name: fullnameValue,
              email: emailValue,
              dni: dniValue,
              password: passwordValue,
            })
        "
        class="q-gutter-md"
      >
        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Inserte nombre y apellido"
          :label="fullnameAttrs?.label"
          :hint="fullnameAttrs?.hint"
          :type="fullnameAttrs?.type"
          :model-value="fullnameValue"
          @update:model-value="$emit('update:fullnameValue', $event)"
          lazy-rules
          :rules="fullnameValidation"
        />
        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Inserte el correo electrónico"
          :label="emailAttrs?.label"
          :hint="emailAttrs?.hint"
          :type="emailAttrs?.type"
          :model-value="emailValue"
          @update:model-value="$emit('update:emailValue', $event)"
          lazy-rules
          :rules="emailValidations"
        />

        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Inserte DNI"
          :label="dniAttrs?.label"
          :hint="dniAttrs?.hint"
          :type="dniAttrs?.type"
          :model-value="dniValue"
          @update:model-value="$emit('update:dniValue', $event)"
          lazy-rules
          :rules="dniValidation"
        />

        <q-input
          dense
          input-class="login__input"
          color="black"
          outlined
          placeholder="Registre contraseña"
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
        <button class="login__get_account" @click="signin">
          Iniciar sesión
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

const signin = () => {
  router.push({ name: 'login' });
};

interface InputAttrsProps {
  label: QInputProps['label'];
  hint: QInputProps['hint'];
  type: QInputProps['type'];
}

interface LoginLayoutProps {
  onSubmit: (userData: {
    full_name: string;
    email: string;
    dni: string;
    password: string;
  }) => void;
  fullnameValue: string;
  fullnameAttrs?: InputAttrsProps;
  emailValue: string;
  emailAttrs?: InputAttrsProps;
  dniValue: string;
  dniAttrs?: InputAttrsProps;
  passwordValue: string;
  passwordAttrs?: InputAttrsProps;
  termsAndConditions: boolean;
  isLoading: boolean;

  fullnameValidation: ((value: string) => boolean | string)[];
  emailValidations: ((value: string) => boolean | string)[];
  dniValidation: ((value: string) => boolean | string)[];
  passwordValidations: ((value: string) => boolean | string)[];
}

interface LoginLayoutEmits {
  (eventName: 'update:fullnameValue', value?: string | number | null): void;
  (eventName: 'update:emailValue', value?: string | number | null): void;
  (eventName: 'update:dniValue', value?: string | number | null): void;
  (eventName: 'update:passwordValue', value?: string | number | null): void;
  (eventName: 'termsAndConditions', value?: boolean): void;
}

defineProps<LoginLayoutProps>();
defineEmits<LoginLayoutEmits>();
</script>
