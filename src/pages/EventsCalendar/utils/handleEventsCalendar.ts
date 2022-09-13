import { Event, logger } from 'src/utils';
import { ref } from 'vue';
import { userActiveInscriptions, eventsByMemberAndDay } from 'src/actions';
import { getDateFromTimestamptz } from './parseTimestamptz';
import { Notify } from 'quasar';

export const handleEventsCalendar = () => {
  const events = ref<Event[]>([]);
  const eventsDates = ref<string[]>([]);
  const isLoading = ref<boolean>(false);

  const getEventsByDate = async (date: Date, member_id: string) => {
    if (!date) {
      return [];
    }

    isLoading.value = true;

    return new Promise<Event[]>((resolve, reject) => {
      eventsByMemberAndDay(date, member_id)
        .then((events) => {
          if (!events?.length) {
            Notify.create({
              message:
                'Ocurrió un error buscando los eventos de este día, por favor vuelve a intentar.',
              type: 'negative',
            });
            reject();
          }

          resolve(events);
        })
        .catch((error) => {
          Notify.create({
            message: 'Ocurrio un error, por favor vuelve a intentar',
            type: 'negative',
          });
          logger(error);
          reject([]);
        })
        .finally(() => {
          isLoading.value = false;
        });
    });
  };

  const getEventsDates = async (member_id: string) => {
    const todayDate = new Date();
    const daysToSubtract = 10;
    const daysAgoDate = todayDate.setDate(todayDate.getDate() - daysToSubtract);
    const fromDate = new Date(daysAgoDate).toLocaleString('en').split(',')[0];

    isLoading.value = true;

    return new Promise<string[]>((resolve, reject) => {
      userActiveInscriptions(member_id, fromDate)
        .then((inscriptions) => {
          const userEventsDates = inscriptions.map(
            (inscription) =>
              getDateFromTimestamptz(inscription.event_information.date).date
          );

          if (!userEventsDates?.length) {
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
        })
        .finally(() => {
          isLoading.value = false;
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
