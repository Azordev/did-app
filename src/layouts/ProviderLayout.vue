<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated></q-header>

    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProviderLayout',
});
</script>
