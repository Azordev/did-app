import ProviderHeader from './ProviderHeader.vue';
import ProviderHeaderDocs from './ProviderHeader.documentation.mdx';

export default {
  title: 'Pages/Providers/Components/ProviderHeader',
  component: ProviderHeader,
  parameters: {
    docs: {
      page: ProviderHeaderDocs,
    },
  },
};

const Template = (args) => ({
  components: { ProviderHeader },
  setup() {
    return { args };
  },
  template: '<provider-header v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  logoUrl:
    'https://neufert-cdn.archdaily.net/uploads/account_logo/logo/662/large_LOGOTIPOS_horizontal-alta.jpg',
  queryValue: '',
};
