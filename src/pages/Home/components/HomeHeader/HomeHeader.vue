<template>
  <header class="Header">
    <div class="Header__information">
      <p class="Header__greetings">
        Hola<br /><span class="Header__names"
          >{{ firstName }} {{ lastName }}</span
        >
      </p>
      <div class="Header__text">
        <p>Codigo: {{ userCode }}</p>
        <p
          :class="`Header__membership ${
            isMembershipActive
              ? 'Header__membership--active'
              : 'Header__membership--inactive'
          }`"
        >
          {{ userMembershipStatus }}
        </p>
        <p>Valido hasta: {{ parsedExpirationDate }}</p>
      </div>
    </div>
    <div class="Header__actions">
      <q-btn flat round>
        <q-avatar class="Header__avatar" color="black" text-color="white">
          <img v-if="avatar" :src="avatar" />
          <q-icon size="2.375rem" v-else name="person" />
          <q-icon
            color="black"
            size="1.19rem"
            class="Header__editIcon"
            name="edit"
          />
        </q-avatar>
      </q-btn>
      <q-btn class="Header__calendar" color="accent" dense no-caps>
        <q-icon name="today" left />
        Calendario
      </q-btn>
    </div>
  </header>
</template>

<script>
import { defineComponent, computed } from 'vue';
import './styles.scss';

export default defineComponent({
  name: 'HomeHeader',
  props: {
    firstName: {
      type: String,
      default: '',
      require: true,
    },
    lastName: {
      type: String,
      default: '',
      require: true,
    },
    userCode: {
      type: String,
      default: '',
      require: true,
    },
    isMembershipActive: {
      type: Boolean,
      default: false,
      require: true,
    },
    expirationDate: {
      type: Date,
      default: new Date('01/01/1999'),
      require: true,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const userMembershipStatus = computed(() =>
      props.isMembershipActive ? 'Membresia activa' : 'Membresia inactiva'
    );

    const parsedExpirationDate = computed(() =>
      props.expirationDate.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    );

    return { userMembershipStatus, parsedExpirationDate };
  },
});
</script>
