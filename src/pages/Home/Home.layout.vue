<template>
  <home-header
    :expirationDate="expirationDate"
    :firstName="firstName"
    :lastName="lastName"
    :userCode="userCode"
    :isMembershipActive="isMembershipActive"
    :avatar="avatar"
  />
  <div class="HomeLayout__content">
    <home-list class="HomeLayout__list" title="Eventos">
      <div v-for="event of events" :key="event.id">
        <event-card
          :title="event.title"
          :image_url="event.image_url"
          :date="event.date"
          :isAnnouncement="event.type === 'PUBLIC'"
        />
      </div>
    </home-list>
    <home-list class="HomeLayout__list" title="Proveedores">
      <div v-for="provider of providers" :key="provider.id">
        <provider-card :image_url="provider.logo_url" :id="provider.id" />
      </div>
    </home-list>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { UserType } from './mock';
import { HomeHeader, HomeList } from './components';
import { ProviderCard, EventCard } from '../../components';
import { Event, provider } from '../../utils';
import { handleUserData } from './utils/handleUserData.ts';
import './styles.scss';

interface HomeLayoutProps {
  user: UserType;
  events: Event[];
  providers: provider[];
}

const props = defineProps<HomeLayoutProps>();

const { parseUserData } = handleUserData();

const {
  expirationDate,
  isMembershipActive,
  firstName,
  lastName,
  userCode,
  avatar,
} = parseUserData(props.user);
</script>
