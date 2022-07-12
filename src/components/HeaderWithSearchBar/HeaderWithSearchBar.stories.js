import HeaderWithSearchBar from './HeaderWithSearchBar.vue';

export default {
  title: 'Components/HeaderWithSearchBar',
  component: HeaderWithSearchBar,
};

const Template = (args) => ({
  components: { HeaderWithSearchBar },
  setup() {
    return { args };
  },
  template: '<header-with-search-bar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Convocatoria',
  showShoppingCart: false,
};
