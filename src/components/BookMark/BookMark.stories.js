import BookMark from './BookMark.vue';

export default {
  title: 'Components/BookMark',
  component: BookMark,
};

const Template = (args) => ({
  components: { BookMark },
  setup() {
    return { args };
  },
  template: '<book-mark v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Convocatoria',
};
