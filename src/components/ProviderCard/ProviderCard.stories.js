import ProviderCard from './ProviderCard';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Pages/Providers/Components/ProviderCard',
  component: ProviderCard,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { ProviderCard },
  setup() {
    const styles = {
      justifyContent: 'center',
      backgroundColor: '#ccc',
      display: 'flex',
      padding: '10px',
    };

    return { args, styles };
  },
  template: '<div :style="styles"><provider-card v-bind="args" /></div>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  image_url: DIDLogo,
  id: '1',
};
