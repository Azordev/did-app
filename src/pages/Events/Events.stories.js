import EventsLayout from './Events.layout.vue';
import { events } from './mock.ts';

export default {
  title: 'Pages/Events',
  component: EventsLayout,
};

const Template = (args) => ({
  components: { EventsLayout },
  setup() {
    return { args };
  },
  template: '<events-layout v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  events,
};
