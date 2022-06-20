import ProductListItem from './ProductListItem.vue';
import { providerProducts } from '../../../Provider/components/ProviderProducts/mock';

export default {
  title: 'Pages/ShoppingCart/components/ProductListItem',
  component: ProductListItem,
};

const Template = (args) => ({
  components: { ProductListItem },
  setup() {
    return { args };
  },
  template: '<ul><product-list-item v-bind="args" /></ul>',
});

const currentProduct = providerProducts[0];

export const Page = Template.bind({});
Page.args = {
  product: currentProduct,
};
