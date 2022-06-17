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

const HomeHeaderTemplate = (args) => ({
  components: { HomeHeader },
  setup() {
    return { args };
  },
  template: '<home-header v-bind="args" />',
});

export const Default = HomeHeaderTemplate.bind({});
Default.args = {
  memberCode: 'VP00000000',
  firstName: 'Victor',
  lastName: 'Colmenarez',
  isMembershipActive: true,
  expirationDate: new Date('08/08/2022'),
};
