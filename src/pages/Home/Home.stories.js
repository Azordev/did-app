import HomeLayout from './Home.layout.vue';
import { user } from './mock.ts';
import { events } from '../Events/mock.ts';

export default {
  title: 'Home/Page',
  component: HomeLayout,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { HomeLayout },
  setup() {
    return { args };
  },
  template: '<home-layout v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  user,
  events,
};
