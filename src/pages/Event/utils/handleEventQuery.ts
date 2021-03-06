import { getEventById } from 'src/actions/EventsActions';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Event } from 'src/utils';

export const handleEventQuery = () => {
  const route = useRoute();
  const event = ref<Event>();
  const isLoading = ref<boolean>(false);
  const eventId = route.params.event as string;

  const getEventDetail = async (id: string) => {
    isLoading.value = true;
    await getEventById(id).then((result) => {
      event.value = result;
      isLoading.value = false;
    });
  };

  return {
    event,
    isLoading,
    eventId,
    getEventDetail,
  };
};
