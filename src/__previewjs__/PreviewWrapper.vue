<template>
  <div class="wrapped">
    <slot />
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from '@vue/runtime-core';
import { Quasar } from 'quasar';

export default defineComponent({
  setup() {
    getCurrentInstance().appContext.app.use(Quasar);
  },
});
</script>

<style lang="scss">
@import '../../node_modules/quasar/src/css/index.sass';
@import '../../node_modules/@quasar/extras/material-icons/material-icons.css';
@import '../../node_modules/@quasar/extras/material-icons-outlined/material-icons-outlined.css';
@import '../../node_modules/@quasar/extras/material-icons-round/material-icons-round.css';
@import '../../node_modules/@quasar/extras/material-icons-sharp/material-icons-sharp.css';
</style>
