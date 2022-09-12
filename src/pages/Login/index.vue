<template>
  <div class="login">
    <login-layout
      v-model:username-value="username"
      v-model:password-value="userPassword"
      v-model:terms-and-conditions="termsAndConditions"
      :passwordValidations="passwordValidations"
      :usernameValidations="memberCodeValidations"
      :onSubmit="onLogin"
      :isLoading="loginIsLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import './Login.scss';
import { handleUserLogin, userAuthData } from '../../actions';
import {
  passwordValidations,
  memberCodeValidations,
} from '../../utils/validations';
import LoginLayout from './Login.layout.vue';
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';
const username = ref<string>('');
const userPassword = ref<string>('');
const termsAndConditions = ref<boolean>(false);
const loginIsLoading = ref<boolean>(false);
const router = useRouter();
const onLogin = ({ member_code, password }: userAuthData) => {
  loginIsLoading.value = true;
  const variables = { member_code, password };

  handleUserLogin(variables)
    .then((res) => {
      /**
       * Remove this code and add here your logic for user login
       * For example:
       */
      router.push({ name: 'dashboard' });
      LocalStorage.set('user', res);
    })
    .finally(() => {
      loginIsLoading.value = false;
    });
};
</script>
