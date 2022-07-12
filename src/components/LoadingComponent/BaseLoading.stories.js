import BaseLoading from './BaseLoading.vue';

export default {
  title: 'Components/BaseLoading',
  component: BaseLoading,
};

const Template = (args) => ({
  components: { BaseLoading },
  setup() {
    return { args };
  },
  template: '<base-loading v-bind="args" />',
});

export const Default = Template.bind({});
