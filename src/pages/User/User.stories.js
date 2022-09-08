import UserLayout from './User.layout.vue';
import { user } from './mock.ts';

export default {
  title: 'Pages/User',
  component: UserLayout,
};

const UserTemplate = (args) => ({
  components: { UserLayout },
  setup() {
    return { args };
  },
  template: '<user-layout v-bind="args" />',
});

export const Page = UserTemplate.bind({});
Page.args = {
  user,
};
