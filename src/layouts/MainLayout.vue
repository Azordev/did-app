<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> DID App </q-toolbar-title>

        <q-space></q-space>

        <q-btn :to="{ name: 'error' }">Error</q-btn>
        <q-btn :to="{ name: 'eventDetail' }">Event</q-btn>
        <q-btn :to="{ name: 'events' }">Events</q-btn>
        <q-btn :to="{ name: 'dashboard' }">Home</q-btn>
        <q-btn :to="{ name: 'home' }">Landing Page</q-btn>
        <q-btn :to="{ name: 'productDetail' }">Product</q-btn>
        <q-btn :to="{ name: 'products' }">Products</q-btn>
        <q-btn :to="{ name: 'login' }">Login</q-btn>
        <q-btn :to="{ name: 'register' }">Register</q-btn>
        <q-btn :to="{ name: 'userSettings' }">Settings</q-btn>
        <q-btn :to="{ name: 'userProfile' }">User</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
