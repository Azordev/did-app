import ShoppingCartLayout from './ShoppingCart.layout.vue';
import { providerProducts } from '../Provider/components/ProviderProducts/mock';
import { providers } from '../Providers/mock';

export default {
  title: 'Pages/ShoppingCart',
  component: ShoppingCartLayout,
};

const Template = (args) => ({
  components: { ShoppingCartLayout },
  setup() {
    return { args };
  },
  template: '<shopping-cart-layout v-bind="args" />',
});

const currentProvider = providers[0];

export const Page = Template.bind({});
Page.args = {
  products: providerProducts,
  provider: currentProvider,
};
