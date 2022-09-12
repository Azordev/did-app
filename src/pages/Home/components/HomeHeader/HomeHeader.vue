<template>
  <header class="Header">
    <div class="Header__information">
      <p class="Header__greetings">
        Hola<br /><span class="Header__names"
          >{{ firstName }} {{ lastName }}</span
        >
      </p>
      <div class="Header__text">
        <p>Código: {{ memberCode }}</p>
        <p
          :class="`Header__membership ${
            isMembershipActive
              ? 'Header__membership--active'
              : 'Header__membership--inactive'
          }`"
        >
          {{ userMembershipStatus }}
        </p>
        <p class="Header__expiration-date">
          Válido hasta: {{ parsedExpirationDate }}
        </p>
      </div>
    </div>
    <div class="Header__actions">
      <q-btn flat round @click="$router.push({ name: 'userProfile' })">
        <q-avatar class="Header__avatar" color="black" text-color="white">
          <q-img :src="avatar || userDefaultImg" />
          <q-icon
            color="black"
            size="1.19rem"
            class="Header__editIcon"
            name="edit"
          />
        </q-avatar>
      </q-btn>
      <q-btn
        :disabled="!isMembershipActive"
        class="Header__calendar"
        color="accent"
        dense
        no-caps
      >
        <q-icon
          :name="`svguse:${homeCalendarIcon}#calendar|0 0 16.485 18.206`"
        />
        Calendario
      </q-btn>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import homeCalendarIcon from 'src/assets/icons/home-calendar.svg';
import userDefaultImg from 'src/assets/images/user-default.svg';
import './styles.scss';

export interface HomeHeaderProps {
  firstName: string;
  lastName: string;
  memberCode: string;
  isMembershipActive: boolean;
  expirationDate: Date;
  avatar?: string;
}

const props = defineProps<HomeHeaderProps>();

const userMembershipStatus = computed(() =>
  props.isMembershipActive ? 'Membresía activa' : 'Membresía inactiva'
);

const parsedExpirationDate = computed(() =>
  props.expirationDate.toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
);
</script>
