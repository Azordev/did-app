<template>
  <header-with-back-btn
    show-back-btn
    label="Inicio"
    float-right-label="Calendario"
    class="events-calendar__header"
  />
  <q-calendar
    ref="calendar"
    v-model="selectedDate"
    view="month"
    locale="en-us"
    mini-mode
    style="max-width: 300px; min-width: auto; overflow: hidden"
  />
</template>

<script setup>
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { ref } from 'vue';
import './style.scss';

const selectedDate = ref('');
</script>
