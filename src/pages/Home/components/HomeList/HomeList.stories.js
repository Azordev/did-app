import HomeList from './HomeList.vue';
import EventCard from '../../../../components/EventCard';
import { events } from './mock.ts';

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
