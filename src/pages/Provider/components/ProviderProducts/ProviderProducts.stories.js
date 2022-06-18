import ProviderProducts from './ProviderProducts';
import ProviderProductsDoc from './ProviderProducts.documentation.mdx';
import { providerProducts } from './mock';

export default {
  title: 'Pages/Providers/Components/ProviderProducts',
  component: ProviderProducts,
  parameters: {
    docs: {
      page: ProviderProductsDoc,
    },
  },
};

const Template = (args) => ({
  components: { ProviderProducts },
  setup() {
    return { args };
  },
  template: '<provider-products v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  products: providerProducts,
};
