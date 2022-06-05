<template>
  <div class="mainLayout">
    <div>
      <router-view v-slot="{ Component }">
        <suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>
            <div>Loading...</div>
          </template>
        </suspense>
      </router-view>
    </div>

    <nav bordered class="navbar__container bg-white text-black">
      <div class="navbar">
        <app-link :to="{ name: 'dashboard' }" title="Inicio">
          <template #icon>
            <home-icon />
          </template>
        </app-link>
        <app-link :to="{ name: 'events' }" title="Eventos">
          <template #icon>
            <events-icon />
          </template>
        </app-link>
        <app-link :to="{ name: 'providers' }" title="Proveedores">
          <template #icon>
            <providers-icon />
          </template>
        </app-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { eventsIcon, homeIcon, providersIcon } from './assets';
import AppLink from './components/AppLink.vue';
import './styles.scss';

export default defineComponent({
  name: 'MainLayout',
  components: {
    eventsIcon,
    homeIcon,
    providersIcon,
    AppLink,
  },
});
</script>
