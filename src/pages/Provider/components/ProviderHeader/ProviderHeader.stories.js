import ProviderHeader from './ProviderHeader.vue';

export default {
  title: 'Pages/Providers/Components/ProviderHeader',
  component: ProviderHeader,
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
