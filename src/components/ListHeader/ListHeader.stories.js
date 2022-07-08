import ListHeader from './ListHeader.vue';

export default {
  title: 'Components/ListHeader',
  component: ListHeader,
};

const Template = (args) => ({
  components: { ListHeader },
  setup() {
    return { args };
  },
  template: '<list-header v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Convocatoria',
};
