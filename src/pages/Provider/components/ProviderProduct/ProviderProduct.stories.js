import ProviderProduct from './ProviderProduct.vue';
import { providerProduct } from './mock';
import ProviderProductDoc from './ProviderProduct.documentation.mdx';

export default {
  title: 'Pages/Provider/Components/ProviderProduct',
  component: ProviderProduct,
  parameters: {
    docs: {
      page: ProviderProductDoc,
    },
  },
};

const Template = (args) => ({
  components: { ProviderProduct },
  setup() {
    return { args };
  },
  template: '<provider-product v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  product: providerProduct,
};
