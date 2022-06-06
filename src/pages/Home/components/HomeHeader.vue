<template>
  <header>
    <p class="Header__greetings">
      Hola<br /><span class="Header__names"
        >{{ firstName }} {{ lastName }}</span
      >
    </p>
    <div class="Header__text">
      <p>Codigo: {{ userCode }}</p>
      <p>{{ userMembershipStatus }}</p>
      <p>Valido hasta: {{ parsedExpirationDate }}</p>
    </div>
  </header>
</template>

<script>
import { defineComponent, computed } from 'vue';

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
