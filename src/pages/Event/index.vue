<template>
  <header-with-back-btn show-back-btn label="Eventos" />
  <event-layout
    v-if="event"
    :event="event"
    :user-inscription-id="userInscriptionId"
  />
</template>

<script setup lang="ts">
import EventLayout from './Event.layout.vue';
import HeaderWithBackBtn from 'src/components/HeaderWithBackBtn';
import { handleEvent } from './utils/handleEvent';
import { getUser, User } from 'src/utils';
import { ref } from 'vue';

const { event, eventId, userInscriptionId, getEventDetail } = handleEvent();
const user = ref<User>(getUser());
const member_id = user.value.member_info.id;

await getEventDetail(member_id, eventId);
</script>
