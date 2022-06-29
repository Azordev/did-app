import ShoppingCartLayout from './ShoppingCart.layout.vue';
import { providerProducts } from '../Provider/components/ProviderProducts/mock';
import { providers } from '../Providers/mock';
import {
  getEmailLink,
  getInvoiceText,
  getWebWhatsappLink,
} from './utils/getCustomerServiceLink';
import { calculateTotalPrice } from './utils/calculateTotalPrice';

export default {
  title: 'Pages/ShoppingCart',
  component: ShoppingCartLayout,
};

const currentProvider = providers[0];
const productsWithQuantity = providerProducts.map((product) => ({
  quantity: 1,
  product,
}));
const invoiceText = getInvoiceText(productsWithQuantity);
const whatsappLink = getWebWhatsappLink({
  message: invoiceText,
  phone: currentProvider.b2b_phone,
});
const emailLink = getEmailLink({
  message: invoiceText,
  email: currentProvider.b2b_email,
});
const total = calculateTotalPrice(productsWithQuantity);

const Template = (args) => ({
  components: { ShoppingCartLayout },
  setup() {
    return { args };
  },
  template: '<shopping-cart-layout v-bind="args" />',
});

export const CartEmpty = Template.bind({});
CartEmpty.args = {
  provider: currentProvider,
};

export const CartProviderWithoutWhatsApp = Template.bind({});
CartProviderWithoutWhatsApp.args = {
  provider: currentProvider,
  cartProducts: productsWithQuantity,
  total,
  whatsappLink: undefined,
  emailLink: emailLink,
};

export const CartWithProducts = Template.bind({});
CartWithProducts.args = {
  provider: currentProvider,
  cartProducts: productsWithQuantity,
  total: '10',
  whatsappLink: whatsappLink,
  emailLink: emailLink,
  total,
};
