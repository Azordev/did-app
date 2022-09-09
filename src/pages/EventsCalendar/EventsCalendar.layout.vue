<template>
  <header-with-back-btn
    show-back-btn
    label="Inicio"
    float-right-label="Calendario"
    class="events-calendar__header"
  />
  <q-date
    class="events-calendar__calendar"
    color="blue"
    flat
    square
    ref="calendar"
    default-view="Calendar"
    no-unset
    v-model="selectedDate"
    :locale="locale"
  />
  <div class="events-calendar__events">
    <div class="events-calendar__event">
      <div class="events-calendar__event-date">Junio 10</div>
      <div>Nombre del evento</div>
    </div>
    <div class="events-calendar__event">
      <div class="events-calendar__event-date">Junio 10</div>
      <div>Nombre del evento</div>
    </div>
  </div>
</template>

<script setup>
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { ref } from 'vue';
import './style.scss';

const selectedDate = ref('');
const locale = ref({
  days: [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ],
  daysShort: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
});
</script>
