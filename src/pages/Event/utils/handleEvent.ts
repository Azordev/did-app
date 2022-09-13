import {
  getEventById,
  subscribeUserToEvent,
  unsubscribeUserToEvent,
} from 'src/actions/EventsActions';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Event } from 'src/utils';
import { Notify } from 'quasar';

export const handleEvent = () => {
  const route = useRoute();
  const event = ref<Event>();
  const isLoading = ref<boolean>(false);
  const eventId = route.params.event as string;
  const userInscriptionId = ref<string>();

  const getEventDetail = async (memberId: string, eventId: string) => {
    isLoading.value = true;

    await getEventById(memberId, eventId).then((result) => {
      userInscriptionId.value = result.inscriptions[0]?.id;
      event.value = result;
      isLoading.value = false;
    });
  };

  const onSubscribeUserToEvent = (memberId: string, eventId: string) => {
    isLoading.value = true;

    subscribeUserToEvent(memberId, eventId)
      .then((res) => {
        userInscriptionId.value = res;
      })
      .catch(() => {
        Notify.create({
          message: 'Ocurrio un error, por favor vuelve a intentar.',
          type: 'negative',
        });
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const onUnsubscribeUserToEvent = (inscriptionId: string) => {
    isLoading.value = true;

    unsubscribeUserToEvent(inscriptionId)
      .then(() => {
        userInscriptionId.value = undefined;
      })
      .catch(() => {
        Notify.create({
          message: 'Ocurrio un error, por favor vuelve a intentar.',
          type: 'negative',
        });
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  return {
    userInscriptionId,
    event,
    isLoading,
    eventId,
    getEventDetail,
    onUnsubscribeUserToEvent,
    onSubscribeUserToEvent,
  };
};
