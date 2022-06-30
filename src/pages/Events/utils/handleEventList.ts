import { ref } from 'vue';
import { Event, logger } from 'src/utils';
import { getListOfEvents } from '../../../actions';

export const handleEventList = () => {
  const searchText = ref<string>('');
  const events = ref<Event[]>();
  const isLoading = ref<boolean>(false);

  const clearSearch = () => {
    searchText.value = '';
    getListOfEvents(searchText.value);
  };

  const getEventList = async (name?: string) => {
    isLoading.value = true;
    await getListOfEvents(name)
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

  return { events, searchText, isLoading, getEventList, clearSearch };
};
