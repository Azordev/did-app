<template>
  <detail-layout
    class="Event__container"
    :image_url="event.image_url"
    :fallback="DIDLogo"
  >
    <template #custom-name>
      <span class="Event__title">
        <span>{{ event.title }}</span>
        <span class="Event__date">{{ parsedEventDate }}</span>
      </span>
    </template>

    <template #default>
      <div class="Event__detail">
        <div class="Event__description">
          {{ event.description }}
        </div>
        <q-btn
          v-if="!userInscriptionId"
          @click="$emit('subscribeUserToEvent')"
          class="Event__btn-participate"
          color="primary"
          size="lg"
          no-caps
          :loading="isLoading"
        >
          Participar
        </q-btn>
        <q-btn
          v-else
          @click="$emit('unsubscribeUserToEvent', userInscriptionId)"
          class="Event__btn-participate"
          color="primary"
          size="lg"
          no-caps
          :loading="isLoading"
        >
          Desuscribirse
        </q-btn>
      </div>
    </template>
  </detail-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DetailLayout from 'src/components/DetailLayout';
import { Event } from 'src/utils';
import DIDLogo from 'src/assets/logos/didperu-dark.svg';
import './styles.scss';

const parsedEventDate = ref<string>();

interface EventLayoutProps {
  event: Event;
  userInscriptionId?: string;
  isLoading: boolean;
}

interface EventLayoutEmits {
  (eventName: 'subscribeUserToEvent', value: void): void;
  (eventName: 'unsubscribeUserToEvent', value: string): void;
}

defineEmits<EventLayoutEmits>();
const props = defineProps<EventLayoutProps>();

parsedEventDate.value = new Date(props.event.date).toLocaleString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
</script>
