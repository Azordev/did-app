import EventLayout from './Event.layout.vue';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Pages/EventDetail',
  component: EventLayout,
};

const Template = (args) => ({
  components: { EventLayout },
  setup() {
    return { args };
  },
  template: '<event-layout v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  event: {
    image_url: DIDLogo,
    title: "Let's create a good storybook's documentation",
    date: new Date(),
    description:
      'With effort, we can create good documentation on the storybook that will help any developer which work on this project',
  },
};
