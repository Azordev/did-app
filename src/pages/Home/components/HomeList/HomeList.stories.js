import HomeList from './HomeList.vue';
import EventCard from '../../../../components/EventCard';
import ProviderCard from '../../../../components/ProviderCard';
import { events } from '../../../Events/mock.ts';
import { providers } from '../../../Providers/mock.ts';

export default {
  title: 'Home/Components/HomeList',
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

export const ProviderCard = (args) => ({
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
ProviderCard.args = {
  title: 'Events',
};
