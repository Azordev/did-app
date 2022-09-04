export default {
  title: 'Pages/User/Components/UserData',
  component: UserData,
  argsTypes: {},
};

const UserDataTemplate = (args) => ({
  components: { UserUserData },
  setup() {
    return { args };
  },
  template: '<user-data v-bind="args" />',
});

export const Default = UserDataTemplate.bind({});
Default.args = {};
