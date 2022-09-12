import { ref } from 'vue';
import EventsCalendar from './EventsCalendar.layout.vue';
import { mock_events, events_dates } from './mock.ts';
import { getDateFromTimestamptz } from './utils/parseTimestamptz';

export default {
  title: 'Pages/EventsCalendar',
  component: EventsCalendar,
};

const Template = (args) => ({
  components: { EventsCalendar },
  setup() {
    const events = ref([]);

    const selectDate = (selectedDateString) => {
      const selectedDate = new Date(selectedDateString);

      events.value = mock_events.filter((event) => {
        const { date: eventDateString } = getDateFromTimestamptz(event.date);
        const eventDate = new Date(eventDateString);

        return eventDate.getTime() === selectedDate.getTime();
      });
    };

    return { args, events, selectDate };
  },
  template:
    '<events-calendar @selectDate="selectDate" :events="events" v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  eventsDates: events_dates,
};
