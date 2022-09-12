import { getEventById } from 'src/actions/EventsActions';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Event } from 'src/utils';

export const handleEvent = () => {
  const route = useRoute();
  const event = ref<Event>();
  const isLoading = ref<boolean>(false);
  const eventId = route.params.event as string;
  const userInscriptionId = ref<string>();

  const getEventDetail = async (member_id: string, event_id: string) => {
    isLoading.value = true;

    await getEventById(member_id, event_id).then((result) => {
      userInscriptionId.value = result.inscriptions[0]?.id;
      event.value = result;
      isLoading.value = false;
    });
  };

  return {
    userInscriptionId,
    event,
    isLoading,
    eventId,
    getEventDetail,
  };
};
