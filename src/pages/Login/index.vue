<template>
  <div class="login">
    <login-layout
      v-model:email-value="userEmail"
      v-model:password-value="userPassword"
      :passwordValidations="passwordValidations"
      :emailValidations="emailValidations"
      :onSubmit="onSubmit"
    />

    {{ loginResult }}
    {{ loginState }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import './Login.css';
import { handleUserLogin, userAuthData } from '../../actions';
import { emailValidations, passwordValidations } from '../../utils/validations';
import LoginLayout from './Login.layout.vue';

export default defineComponent({
  name: 'Login',
  components: {
    LoginLayout,
  },
  setup: async () => {
    const userEmail = ref<string>('');
    const userPassword = ref<string>('');
    const loginResult = ref<object>({});
    const loginIsLoading = ref<boolean>(false);

    const logUser = ({ email, password }: userAuthData) => {
      loginIsLoading.value = true;

      handleUserLogin({ email, password })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          loginIsLoading.value = false;
        });
    };

    return {
      onSubmit: logUser,
      userEmail,
      userPassword,
      emailValidations,
      passwordValidations,
      loginResult,
      loginIsLoading,
    };
  },
});
</script>
