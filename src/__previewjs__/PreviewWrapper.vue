<template>
  <div class="wrapped">
    <slot />
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from '@vue/runtime-core';
import 'node_modules/quasar/src/css/index.sass';
import { Quasar } from 'quasar';

export default defineComponent({
  setup() {
    getCurrentInstance().appContext.app.use(Quasar);
  },
});
</script>

<style lang="scss">
@import '../css/quasar.variables.scss';
@import '../css/app.scss';
@import '../../node_modules/@quasar/extras/material-icons/material-icons.css';
@import '../../node_modules/@quasar/extras/material-icons-outlined/material-outlined.css';
@import '../../node_modules/@quasar/extras/material-icons-round/material-round.css';
@import '../../node_modules/@quasar/extras/material-icons-sharp/material-sharp.css';
</style>
