import { Event } from 'src/utils';
import { ref } from 'vue';
import { mock_events, events_dates } from '../mock';
import { getDateFromTimestamptz } from './parseTimestamptz';

export const handleEventsCalendar = () => {
  const events = ref<Event[]>([]);
  const eventsDates = ref<string[]>([]);

  // Replace mock data for a call to database
  const getEventsByDate = (date: Date) => {
    if (!date) {
      return [];
    }

    return mock_events.filter((event) => {
      const { date: eventDateString } = getDateFromTimestamptz(event.date);
      const eventDate = new Date(eventDateString);

      return eventDate.getTime() === date.getTime();
    });
  };

  // Replace mock data for a call to database
  const getEventsDates = () => {
    return events_dates;
  };

  return {
    getEventsByDate,
    getEventsDates,
    events,
    eventsDates,
  };
};
