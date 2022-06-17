import DetailLayout from './DetailLayout.vue';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Components/DetailLayout',
  component: DetailLayout,
};

const DetailLayoutTemplate = (args) => ({
  components: { DetailLayout },
  setup() {
    return { args };
  },
  template:
    '<detail-layout v-bind="args">Here is the text description</detail-layout>',
});

export const Default = DetailLayoutTemplate.bind({});
Default.args = {
  name: 'DID Product',
  image_url: DIDLogo,
};
