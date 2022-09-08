import UserData from './UserData.vue';

export default {
  title: 'Pages/User/Components/UserData',
  component: UserData,
};

const UserDataTemplate = (args) => ({
  components: { UserData },
  setup() {
    return { args };
  },
  template: '<user-data v-bind="args" />',
});

export const Default = UserDataTemplate.bind({});
Default.args = {
  firstName: 'Victor',
  lastName: 'Colmenarez',
  memberCode: 'VP00000000',
  email: 'xxxx@correo.com',
};
