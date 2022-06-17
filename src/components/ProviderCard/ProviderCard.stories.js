import ProviderCard from './ProviderCard';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Pages/Providers/Components/ProviderCard',
  component: ProviderCard,
};

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
Default.args = {
  image_url: DIDLogo,
  id: '1',
};
