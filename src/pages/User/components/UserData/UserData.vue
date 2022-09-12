<template>
  <div class="UserInformation">
    <div class="UserInformation__text">
      <span>Nombres</span>
      <p>{{ firstName }}</p>
    </div>
    <div class="UserInformation__text">
      <span>Apellidos</span>
      <p>{{ lastName }}</p>
    </div>
    <div class="UserInformation__text">
      <span>Código</span>
      <p>{{ memberCode }}</p>
    </div>
    <q-form @submit.prevent="$emit('savePassword', newPassword)">
      <div class="UserInformation__password">
        <div v-if="!isEditingPassword">
          <span>Contraseña</span>
          <p>************</p>
        </div>
        <div v-else>
          <q-input
            autofocus
            rounded
            color="black"
            outlined
            label="Contraseña"
            :type="seePassword ? 'text' : 'password'"
            :model-value="newPassword"
            @update:model-value="$emit('update:newPassword', $event)"
            lazy-rules
            :rules="passwordValidations"
          >
            <template v-slot:append>
              <q-icon
                :name="seePassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="$emit('seePassword', !seePassword)"
              />
            </template>
          </q-input>
        </div>
        <div
          class="UserInformation__edit-password-btn"
          v-if="!isEditingPassword"
        >
          <q-btn
            unelevated
            rounded
            label="Cambiar Contraseña"
            @click="$emit('editPassword', true)"
          />
        </div>
        <div class="UserInformation__password-form-btns" v-else>
          <q-btn
            :loading="isFormLoading"
            type="submit"
            dense
            unelevated
            rounded
            label="Guardar"
          />
          <q-btn
            :loading="isFormLoading"
            type="reset"
            @click="$emit('editPassword', false)"
            dense
            unelevated
            rounded
            label="Cancelar"
          />
        </div>
      </div>
    </q-form>
    <div class="UserInformation__text">
      <span>Correo</span>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import './styles.scss';
import { passwordValidations } from 'src/utils';

export interface UserDataProps {
  firstName: string;
  lastName: string;
  memberCode: string;
  email: string;
  newPassword: string;
  seePassword: boolean;
  isEditingPassword: boolean;
  isFormLoading: boolean;
}

interface UserDataEmits {
  (eventName: 'update:newPassword', value: boolean): void;
  (eventName: 'editPassword', value: boolean): void;
  (eventName: 'seePassword', value: boolean): void;
  (eventName: 'savePassword', value: string): void;
}

defineProps<UserDataProps>();
defineEmits<UserDataEmits>();
</script>
