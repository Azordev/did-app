import EventCard from './EventCard';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Events/Components/Card',
  component: EventCard,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { EventCard },
  setup() {
    return { args };
  },
  template: '<event-card v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: 'Reunion Privada',
  image_url: DIDLogo,
  date: new Date(),
  isAnnouncement: false,
};
