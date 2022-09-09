import EventsCalendar from './EventsCalendar.layout.vue';
import { events } from './mock.ts';

export default {
  title: 'Pages/EventsCalendar',
  component: EventsCalendar,
};

const Template = (args) => ({
  components: { EventsCalendar },
  setup() {
    return { args };
  },
  template: '<events-calendar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  events,
};
