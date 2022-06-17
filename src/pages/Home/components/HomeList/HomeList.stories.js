import HomeList from './HomeList.vue';
import EventCard from '../../../../components/EventCard';
import ProviderCard from '../../../../components/ProviderCard';
import { events } from '../../../Events/mock.ts';
import { providers } from '../../../Providers/mock.ts';

export default {
  title: 'Pages/Home/Components/HomeList',
  component: HomeList,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Events = (args) => ({
  components: { HomeList, EventCard },
  setup() {
    return { args, events };
  },
  template: `
  <home-list v-bind="args">
    <div v-for="event of events" :key="event.id">
      <event-card
        :title="event.title"
        :date="new Date(event.date)"
        :image_url="event.image_url"
        :isAnnouncement="event.type == 'PUBLIC'"
      />
    </div>
  </home-list>`,
});
Events.args = {
  title: 'Events',
};

export const Providers = (args) => ({
  components: { HomeList, ProviderCard },
  setup() {
    return { args, providers };
  },
  template: `
  <div style="background-color: #f2f2f2; padding: 4px;">
    <home-list v-bind="args">
      <div v-for="provider of providers" :key="provider.id">
        <provider-card
        :image_url="provider.logo_url"
        :id="provider.id"
        />
      </div>
    </home-list>
  </div>
  `,
});
ProviderCard.args = {
  title: 'Proveedores',
};
