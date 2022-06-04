<template>
  <div class="mainLayout">
    <div>
      <Suspense>
        <router-view />
      </Suspense>
    </div>

    <nav bordered class="navbar__container bg-white text-black">
      <div class="navbar">
        <q-btn class="navbar__button" :to="{ name: 'dashboard' }">
          <home-icon />
          <span class="navbar__text">Inicio</span>
        </q-btn>
        <q-btn class="navbar__button" :to="{ name: 'events' }">
          <events-icon />
          <span class="navbar__text">Eventos</span>
        </q-btn>
        <q-btn class="navbar__button" :to="{ name: 'providers' }">
          <providers-icon />
          <span class="navbar__text">Proveedores</span>
        </q-btn>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { eventsIcon, homeIcon, providersIcon } from './assets';
import './styles.scss';

console.log(eventsIcon);

export default defineComponent({
  name: 'MainLayout',
  components: {
    eventsIcon,
    homeIcon,
    providersIcon,
  },
});
</script>
