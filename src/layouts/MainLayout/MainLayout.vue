<template>
  <div class="mainLayout">
    <div>
      <router-view v-slot="{ Component }">
        <suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>
            <div class="loading-screen">
              <div class="loading-screen__image">
                <q-img :src="DIDLogo" />
              </div>
            </div>
          </template>
        </suspense>
      </router-view>
    </div>

    <nav bordered class="navbar__container bg-white text-black">
      <div class="navbar">
        <app-link :to="{ name: 'dashboard' }">
          <template #icon>
            <home-icon />
          </template>
        </app-link>
        <app-link :sub-routes="['eventDetail']" :to="{ name: 'events' }">
          <template #icon>
            <events-icon />
          </template>
        </app-link>
        <app-link
          :sub-routes="['providerDetail', 'productDetail', 'shoppingCart']"
          :to="{ name: 'providers' }"
        >
          <template #icon>
            <providers-icon />
          </template>
        </app-link>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DIDLogo from 'src/assets/logos/didperu.svg';
import { eventsIcon, homeIcon, providersIcon } from './assets';
import AppLink from './components/AppLink.vue';
import './styles.scss';
</script>
