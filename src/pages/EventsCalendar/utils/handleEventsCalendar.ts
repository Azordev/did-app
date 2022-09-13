import { Event, logger } from 'src/utils';
import { ref } from 'vue';
import { mock_events } from '../mock';
import { userActiveInscriptions } from 'src/actions';
import { getDateFromTimestamptz } from './parseTimestamptz';
import { Notify } from 'quasar';

export const handleEventsCalendar = () => {
  const events = ref<Event[]>([]);
  const eventsDates = ref<string[]>([]);
  const isLoading = ref<boolean>(false);

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

  const getEventsDates = async (member_id: string) => {
    const todayDate = new Date();
    const daysToSubtract = 10;
    const daysAgoDate = todayDate.setDate(todayDate.getDate() - daysToSubtract);
    const fromDate = new Date(daysAgoDate).toLocaleString('en').split(',')[0];

    return new Promise<string[]>((resolve, reject) => {
      userActiveInscriptions(member_id, fromDate)
        .then((inscriptions) => {
          const userEventsDates = inscriptions.map(
            (inscription) =>
              getDateFromTimestamptz(inscription.event_information.date).date
          );

          if (!userEventsDates) {
            Notify.create({
              message: 'Aun no estas subscrito a ningun evento.',
              type: 'negative',
            });

            reject();
          }

          resolve(userEventsDates);
        })
        .catch((error) => {
          Notify.create({
            message: 'Ocurrio un error, por favor vuelve a intentar',
            type: 'negative',
          });
          logger(error);
          reject([]);
        });
    });
  };

  return {
    getEventsByDate,
    getEventsDates,
    isLoading,
    events,
    eventsDates,
  };
};
