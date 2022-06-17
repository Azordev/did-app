import BookMark from './BookMark.vue';

export default {
  title: 'Components/BookMark',
  component: BookMark,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { BookMark },
  setup() {
    return { args };
  },
  template: '<book-mark v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Convocatoria',
};
