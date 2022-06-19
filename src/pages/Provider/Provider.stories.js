import ProviderLayout from './Provider.layout.vue';
import ProviderDoc from './Provider.documentation.mdx';
import { providers } from '../Providers/mock';
import { providerProducts } from './components/ProviderProducts/mock';

export default {
  title: 'Pages/Provider',
  component: ProviderLayout,
  parameters: {
    docs: {
      page: ProviderDoc,
    },
  },
  argTypes: {
    provider: {
      type: {
        required: true,
      },
      control: {
        type: null,
      },
    },
    id: {
      type: {
        required: true,
      },
      control: {
        type: null,
      },
    },
  },
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
  provider: currentProvider,
  products: providerProducts,
  searchText: '',
  id: currentProvider.id,
  isLoading: false,
};
