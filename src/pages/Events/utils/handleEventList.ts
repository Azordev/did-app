import { ref } from 'vue';
import { Event, logger } from 'src/utils';
import { getListOfEvents } from '../../../actions';

export const handleEventList = () => {
  const events = ref<Event[]>();
  const isLoading = ref<boolean>(false);

  const getEventList = async () => {
    isLoading.value = true;
    await getListOfEvents()
      .then((event) => {
        events.value = event;
      })
      .catch((err) => {
        logger(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return { events, isLoading, getEventList };
};
