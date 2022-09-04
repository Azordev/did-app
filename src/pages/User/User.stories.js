import UserLayout from './User.layout.vue';

export default {
  title: 'Pages/User',
  component: UserLayout,
};

const UserTemplate = (args) => ({
  components: { UserLayout },
  setup() {
    return { args };
  },
  template:
    '<div style="background-color: #f2f2f2"><user-layout v-bind="args" /></div>',
});

export const Page = UserTemplate.bind({});
Page.args = {
  user,
};
