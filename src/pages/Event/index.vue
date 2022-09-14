<template>
  <header-with-back-btn
    class="Event__btnBack"
    show-back-btn
    label-back="Eventos"
  />
  <event-layout
    v-if="event"
    :event="event"
    :user-inscription-id="userInscriptionId"
    :is-loading="isLoading"
    @unsubscribe-user-to-event="onUnsubscribeUserToEvent($event)"
    @subscribe-user-to-event="() => onSubscribeUserToEvent(member_id, eventId)"
  />
</template>

<script setup lang="ts">
import EventLayout from './Event.layout.vue';
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { handleEvent } from './utils/handleEvent';
import { getUser, User } from 'src/utils';
import { ref } from 'vue';

const {
  event,
  eventId,
  userInscriptionId,
  isLoading,
  onSubscribeUserToEvent,
  onUnsubscribeUserToEvent,
  getEventDetail,
} = handleEvent();
const user = ref<User>(getUser());
const member_id = ref<string>(user.value.member_info.id);

await getEventDetail(member_id.value, eventId);
</script>
