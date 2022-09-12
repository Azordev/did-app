<template>
  <header-with-back-btn show-back-btn label="Eventos" />
  <event-layout
    v-if="event"
    :event="event"
    :user-inscription-id="userInscriptionId"
    @subscribeUserToEvent="() => onSubscribeUserToEvent(member_id, eventId)"
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
  onSubscribeUserToEvent,
  getEventDetail,
} = handleEvent();
const user = ref<User>(getUser());
const member_id = ref<string>(user.value.member_info.id);

await getEventDetail(member_id.value, eventId);
</script>
