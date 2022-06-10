import HomeHeader from './HomeHeader.vue';

export default {
  title: 'Pages/Home/Components/Header',
  component: HomeHeader,
  argsTypes: {
    expirationDate: {
      control: 'date',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const HomeHeaderTemplate = (args) => ({
  components: { HomeHeader },
  setup() {
    return { args };
  },
  template: '<home-header v-bind="args" />',
});

export const Default = HomeHeaderTemplate.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  userCode: 'VP00000000',
  firstName: 'Victor',
  lastName: 'Colmenarez',
  isMembershipActive: true,
  expirationDate: new Date('08/08/2022'),
};
