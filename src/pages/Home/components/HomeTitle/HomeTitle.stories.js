import HomeTitle from './HomeTitle.vue';

export default {
  title: 'Pages/Home/Components/HomeTitle',
  component: HomeTitle,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Eventos',
    },
  },
};

export const Default = (args) => ({
  components: { HomeTitle },
  setup() {
    return { args };
  },
  template: '<home-title v-bind="args">{{ args.default }}</home-title>',
});
