import ItemHeader from './ItemHeader.vue';

export default {
  title: 'Components/ItemHeader',
  component: ItemHeader,
};

const Template = (args) => ({
  components: { ItemHeader },
  setup() {
    return { args };
  },
  template: '<item-header v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Eventos',
};
