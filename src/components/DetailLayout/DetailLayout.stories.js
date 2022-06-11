import DetailLayout from './DetailLayout.vue';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Components/DetailLayout',
  component: DetailLayout,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const DetailLayoutTemplate = (args) => ({
  components: { DetailLayout },
  setup() {
    return { args };
  },
  template:
    '<detail-layout v-bind="args">Here is the text description</detail-layout>',
});

export const Default = DetailLayoutTemplate.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  name: 'DID Product',
  image_url: DIDLogo,
};
