import ProductList from './ProductList.vue';
import { providerProducts } from '../../../Provider/components/ProviderProducts/mock';

export default {
  title: 'Pages/ShoppingCart/components/ProductList',
  component: ProductList,
};

const Template = (args) => ({
  components: { ProductList },
  setup() {
    return { args };
  },
  template: '<product-list v-bind="args" />',
});

export const Page = Template.bind({});
Page.args = {
  products: providerProducts,
};
