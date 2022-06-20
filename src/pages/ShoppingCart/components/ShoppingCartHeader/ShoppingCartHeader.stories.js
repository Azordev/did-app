import ShoppingCartHeader from './ShoppingCartHeader.vue';
import DIDLogo from 'src/assets/logos/didperu.svg';

export default {
  title: 'Pages/ShoppingCart/components/ShoppingCartHeader',
  component: ShoppingCartHeader,
};

const Template = (args) => ({
  components: { ShoppingCartHeader },
  setup() {
    return { args };
  },
  template: '<shopping-cart-header v-bind="args" />',
});

export const Page = Template.bind({});
Page.args = {
  image_url: DIDLogo,
};
