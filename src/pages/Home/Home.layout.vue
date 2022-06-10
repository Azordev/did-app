<template>
  <home-header
    :expirationDate="expirationDate"
    :firstName="firstName"
    :lastName="lastName"
    :memberCode="memberCode"
    :isMembershipActive="isMembershipActive"
    :avatar="avatar"
  />
  <div class="HomeLayout__content">
    <home-list class="HomeLayout__list" title="Eventos">
      <div v-for="event of events" :key="event.id">
        <event-card
          :title="event.title"
          :image_url="event.image_url"
          :date="new Date(event.date)"
          :isAnnouncement="event.type === 'PUBLIC'"
          @onClick="
            $router.push({
              name: 'eventDetail',
              params: {
                event: event.id,
              },
            })
          "
        />
      </div>
    </home-list>
    <home-list class="HomeLayout__list" title="Proveedores">
      <div v-for="provider of providers" :key="provider.id">
        <provider-card
          @onClick="
            $router.push({
              name: 'providerDetail',
              params: { provider: provider.id },
            })
          "
          :image_url="provider.logo_url"
          :id="provider.id"
        />
      </div>
    </home-list>
  </div>
</template>

<script setup lang="ts">
import { UserType } from './mock';
import { HomeHeader, HomeList } from './components';
import { ProviderCard, EventCard } from '../../components';
import { Event, Provider } from '../../utils';
import { handleUserData } from './utils/handleUserData.ts';
import './styles.scss';

interface HomeLayoutProps {
  user: UserType;
  events: Event[];
  providers: Provider[];
}

const props = defineProps<HomeLayoutProps>();

const { parseUserData } = handleUserData();

const {
  expirationDate,
  isMembershipActive,
  firstName,
  lastName,
  memberCode,
  avatar,
} = parseUserData(props.user);
</script>
