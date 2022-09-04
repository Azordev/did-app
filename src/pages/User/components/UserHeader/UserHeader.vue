<template>
  <header class="UserHeader">
    <div class="UserHeader__actions">
      <div>
        <q-btn
          flat
          class="UserHeader__inicio"
          @click="$router.push({ name: 'dashboard' })"
        >
          <q-icon name="navigate_before" />
          Inicio
        </q-btn>
      </div>
      <q-btn flat round>
        <q-avatar class="UserHeader__avatar" color="black" text-color="white">
          <q-img :src="avatar || userDefaultImg" />
          <q-icon
            color="black"
            size="1.19rem"
            class="UserHeader__editIcon"
            name="add"
          />
        </q-avatar>
      </q-btn>
      <div class="UserHeader__information">
        <div class="UserHeader__text">
          <p
            :class="`UserHeader__membership ${
              isMembershipActive
                ? 'UserHeader__membership--active'
                : 'UserHeader__membership--inactive'
            }`"
          >
            {{ userMembershipStatus }}
          </p>
          <p class="UserHeader__expiration-date">
            Válido hasta: {{ parsedExpirationDate }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import userDefaultImg from 'src/assets/images/user-default.svg';
import './styles.scss';

export interface UserHeaderProps {
  isMembershipActive: boolean;
  expirationDate: Date;
  avatar?: string;
}

const props = defineProps<UserHeaderProps>();

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
