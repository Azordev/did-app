import HeaderWithBackBtn from './HeaderWithBackBtn.vue';

export default {
  title: 'Components/HeaderWithBackBtn',
  component: HeaderWithBackBtn,
};

const Template = (args) => ({
  components: { HeaderWithBackBtn },
  setup() {
    return { args };
  },
  template: '<header-with-back-btn v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Eventos',
};
