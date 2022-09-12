import UserHeader from './UserHeader.vue';

export default {
  title: 'Pages/User/Components/UserHeader',
  component: UserHeader,
  argsTypes: {
    expirationDate: {
      control: 'date',
    },
  },
};

const UserHeaderTemplate = (args) => ({
  components: { UserHeader },
  setup() {
    return { args };
  },
  template: '<user-header v-bind="args" />',
});

export const Default = UserHeaderTemplate.bind({});
Default.args = {
  isMembershipActive: true,
  expirationDate: new Date('08/08/2022'),
};
