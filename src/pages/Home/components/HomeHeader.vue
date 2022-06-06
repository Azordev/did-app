<template>
  <header>
    <p>
      Hola<br /><span>{{ firstName }} {{ lastName }}</span>
    </p>
  </header>
</template>

<script>
export default {
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
};
</script>
