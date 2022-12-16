<template>
  <div class="login">
    <signup-layout
      v-model:firstname-value="userfirstname"
      v-model:lastname-value="userlastname"
      v-model:email-value="userEmail"
      v-model:dni-value="userDni"
      v-model:password-value="userPassword"
      v-model:terms-and-conditions="termsAndConditions"
      :passwordValidations="passwordValidations"
      :usernameValidations="memberCodeValidations"
      :emailValidations="emailValidations"
      :dniValidation="dniValidation"
      :onSubmit="onASubmit"
      :isLoading="loginIsLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '../Login/Login.scss';
import { handleUserSignup, userSignupData } from 'src/actions';
import {
  emailValidations,
  memberCodeValidations,
  dniValidation,
  passwordValidations,
} from 'src/utils/validations';
import SignupLayout from './Signup.layout.vue';
import { useRouter } from 'vue-router';

const userfirstname = ref<string>('');
const userlastname = ref<string>('');
const userEmail = ref<string>('');
const userDni = ref<string>('');
const userPassword = ref<string>('');
const termsAndConditions = ref<boolean>(false);
const loginIsLoading = ref<boolean>(false);
const router = useRouter();

const onASubmit = ({
  first_name,
  last_name,
  email,
  dni,
  password,
}: userSignupData) => {
  loginIsLoading.value = true;
  const variables = {
    first_name,
    last_name,
    email,
    dni,
    password,
    position: 'Socio',
    type: 'MEMBER',
  };

  handleUserSignup(variables)
    .then(() => {
      router.push({ name: 'login' });
    })
    .finally(() => {
      loginIsLoading.value = false;
    });
};
</script>
