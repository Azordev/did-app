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

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = (args) => ({
  components: { HomeTitle },
  setup() {
    return { args };
  },
  template: '<home-title v-bind="args">{{ args.default }}</home-title>',
});
