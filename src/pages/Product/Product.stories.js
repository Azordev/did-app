import ProductLayout from './Product.layout.vue';
import { providerProducts } from '../Provider/components/ProviderProducts/mock.ts';

export default {
  title: 'Pages/ProductDetail',
  component: ProductLayout,
};

const Template = (args) => ({
  components: { ProductLayout },
  setup() {
    return { args };
  },
  template: '<product-layout v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Convocatoria',
  product: providerProducts[1],
};
