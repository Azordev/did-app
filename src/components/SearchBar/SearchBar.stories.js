import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

const Template = (args) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  template: '<search-bar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
