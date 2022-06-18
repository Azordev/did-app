import ProviderLayout from './Provider.layout.vue';
import { providers } from '../Providers/mock';
import { providerProducts } from './mock';

export default {
  title: 'Pages/Providers',
  component: ProviderLayout,
};

const Template = (args) => ({
  components: { ProviderLayout },
  setup() {
    return { args };
  },
  template: '<provider-layout v-bind="args" />',
});

const currentProvider = providers[0];

export const Page = Template.bind({});
Page.args = {
  providers: currentProvider.id,
  products: providerProducts,
  searchText: '',
  id: currentProvider.id,
  isLoading: false,
};
