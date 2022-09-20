import { Notify } from 'quasar';
import { uploadUserAvatar } from 'src/actions';
import { logger } from 'src/utils';
import { ref } from 'vue';

export const handleUserAvatar = () => {
  const isLoadingAvatar = ref<boolean>(false);
  const newAvatar = ref<string>('');

  const onUpdateUserAvatar = (id: string, avatar: string) => {
    isLoadingAvatar.value = true;

    return new Promise<void>((resolve, reject) => {
      uploadUserAvatar(id, avatar)
        .then(() => {
          newAvatar.value = '';

          Notify.create({
            type: 'positive',
            message: 'La contraseña se actualizó correctamente.',
          });
          resolve();
        })
        .catch((error) => {
          logger(error);
          Notify.create({
            message: 'Ocurrio un error, por favor vuelve a intentar.',
            type: 'negative',
          });
          reject();
        })
        .finally(() => {
          isLoadingAvatar.value = false;
        });
    });
  };

  return {
    newAvatar,
    isLoadingAvatar,
    onUpdateUserAvatar,
  };
};
