<template>
  <q-layout class="page_body" view="hHh lpR fFf">
    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>

    <q-footer bordered class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title> DID App </q-toolbar-title>

        <q-space></q-space>

        <q-btn :to="{ name: 'error' }">Error</q-btn>
        <q-btn :to="{ name: 'eventDetail' }">Event</q-btn>
        <q-btn :to="{ name: 'events' }">Events</q-btn>
        <q-btn :to="{ name: 'dashboard' }">Home</q-btn>
        <q-btn :to="{ name: 'home' }">Landing Page</q-btn>
        <q-btn :to="{ name: 'products' }">Products</q-btn>
        <q-btn :to="{ name: 'login' }">Login</q-btn>
        <q-btn :to="{ name: 'userSettings' }">Settings</q-btn>
        <q-btn :to="{ name: 'userProfile' }">User</q-btn>
        <q-btn :to="{ name: 'providers' }">Providers</q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style lang="scss">
.page_body {
  background-color: $white-flight;
}
</style>
