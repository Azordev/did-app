import ProviderCard from './ProviderCard.vue';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Pages/Providers/ProviderCard',
  component: ProviderCard,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { ProviderCard },
  setup() {
    return { args };
  },
  template:
    '<div style="justify-content: center; background-color: #ccc; display: flex; padding: 10px;"><provider-card v-bind="args" /></div>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  image_url: DIDLogo,
  id: '1',
};
