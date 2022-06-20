import ProductsQuantity from './ProductsQuantity.vue';

export default {
  title: 'Pages/ShoppingCart/components/ProductsQuantity',
  component: ProductsQuantity,
};

const Template = (args) => ({
  components: { ProductsQuantity },
  setup() {
    return { args };
  },
  template: '<products-quantity v-bind="args" />',
});

export const Page = Template.bind({});
Page.args = {
  quantity: 1,
};
