<template>
  <div class="login">
    <login-layout
      v-model:username-value="username"
      v-model:password-value="userPassword"
      v-model:terms-and-conditions="termsAndConditions"
      :passwordValidations="passwordValidations"
      :onSubmit="onSubmit"
      :isLoading="loginIsLoading"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './Login.scss';
import { handleUserLogin, userAuthData } from '../../actions';
import { passwordValidations } from '../../utils/validations';
import LoginLayout from './Login.layout.vue';
import { LocalStorage } from 'quasar';

export default defineComponent({
  name: 'Login',
  components: {
    LoginLayout,
  },
  setup: async () => {
    const username = ref<string>('');
    const userPassword = ref<string>('');
    const termsAndConditions = ref<boolean>(false);
    const loginIsLoading = ref<boolean>(false);

    const logUser = ({ user_code, password }: userAuthData) => {
      loginIsLoading.value = true;
      const variables = { user_code, password };

      handleUserLogin(variables)
        .then((res) => {
          LocalStorage.set('user', res);
          console.log(res);
        })
        .finally(() => {
          loginIsLoading.value = false;
        });
    };

    return {
      onSubmit: logUser,
      username,
      userPassword,
      passwordValidations,
      loginIsLoading,
      termsAndConditions,
    };
  },
});
</script>
