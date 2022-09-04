export default {
  title: 'Pages/User/Components/Header',
  component: UserHeader,
  argsTypes: {},
};

const UserHeaderTemplate = (args) => ({
  components: { UserHeader },
  setup() {
    return { args };
  },
  template: '<user-header v-bind="args" />',
});

export const Default = UserHeaderTemplate.bind({});
Default.args = {};
