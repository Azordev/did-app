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
      <span>codigo</span>
      <p>{{ memberCode }}</p>
    </div>
    <div class="UserInformation__password">
      <div>
        <span>Contraseña</span>
        <p>************</p>
      </div>
      <div>
        <q-btn unelevated rounded label="Cambiar Contraseña" />
      </div>
    </div>
    <div class="UserInformation__text">
      <span>correo</span>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import './styles.scss';

export interface UserDataProps {
  firstName: string;
  lastName: string;
  memberCode: string;
  email: string;
}

const props = defineProps<UserDataProps>();
</script>
