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
      <template v-if="isMembershipActive">
        <div
          class="HomeLayout__listItem"
          v-for="event of events"
          :key="event.id"
        >
          <event-card
            :title="event.title"
            :image_url="event.image_url || DIDLogo"
            :date="new Date(event.date)"
            :isAnnouncement="event.type === EventType.PUBLIC"
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
      </template>
      <div v-else>
        Por favor actualice su membresia para ver los proximos eventos
        disponibles en DID
      </div>
    </home-list>
    <home-list class="HomeLayout__list" title="Proveedores">
      <template v-if="isMembershipActive">
        <div
          class="HomeLayout__listItem"
          v-for="provider of providers"
          :key="provider.id"
        >
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
      </template>
      <div v-else>
        Por favor actualice su membresia para disfrutar de descuentos exclusivos
      </div>
    </home-list>
  </div>
</template>

<script setup lang="ts">
import { UserType } from './mock';
import { HomeHeader, HomeList } from './components';
import { ProviderCard, EventCard } from '../../components';
import { Event, EventType, Provider } from '../../utils';
import { handleUserData } from './utils/handleUserData';
import DIDLogo from '../../assets/logos/didperu.svg';
import './styles.scss';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';

interface HomeLayoutProps {
  user?: UserType;
  events?: Event[];
  providers?: Provider[];
}

const props = defineProps<HomeLayoutProps>();

const { parseUserData } = handleUserData();

if (!props.user) {
  const router = useRouter();

  Notify.create({
    message: 'Hemos tenido problemas para localizar tu usuario',
    type: 'Negative',
  });

  router.push({ name: 'login' });
}

const {
  expirationDate,
  isMembershipActive,
  firstName,
  lastName,
  memberCode,
  avatar,
} = parseUserData(props.user);
</script>
