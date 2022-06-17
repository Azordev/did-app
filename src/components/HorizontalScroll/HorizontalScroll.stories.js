import HorizontalScroll from './HorizontalScroll.vue';
import EventCard from '../EventCard';
import DIDLogo from '../../assets/logos/didperu.svg';

export default {
  title: 'Components/HorizontalScroll',
  component: HorizontalScroll,
};

const Template = (args) => ({
  components: { HorizontalScroll, EventCard },
  setup() {
    return { args };
  },
  template: `<horizontal-scroll v-bind="args"><div v-for="index in 10" ><event-card title="Titulo" image_url="${DIDLogo}" :date="new Date()" isAnnouncement /></div></horizontal-scroll>`,
});

export const Default = Template.bind({});
