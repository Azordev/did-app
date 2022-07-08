import EventCard from './EventCard';
import DIDLogo from '../../assets/logos/didperu-dark.svg';

export default {
  title: 'Pages/Events/Components/Card',
  component: EventCard,
};

const Template = (args) => ({
  components: { EventCard },
  setup() {
    return { args };
  },
  template: '<event-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Reunion Privada',
  image_url: DIDLogo,
  date: new Date(),
  isAnnouncement: false,
};
