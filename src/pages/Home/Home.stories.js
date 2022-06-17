import HomeLayout from './Home.layout.vue';
import { user } from './mock.ts';
import { events } from '../Events/mock.ts';
import { providers } from '../Providers/mock.ts';

export default {
  title: 'Pages/Home',
  component: HomeLayout,
};

const HomeTemplate = (args) => ({
  components: { HomeLayout },
  setup() {
    return { args };
  },
  template:
    '<div style="background-color: #f2f2f2"><home-layout v-bind="args" /></div>',
});

export const Page = HomeTemplate.bind({});
Page.args = {
  user,
  events,
  providers,
};
