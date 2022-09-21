import axios from 'axios';
import { User } from 'src/utils/apollo.types';
import { LocalStorage } from 'quasar';
import { Notify } from 'quasar';
import { uploadUserAvatar } from 'src/actions';
import { logger } from 'src/utils';
import { ref } from 'vue';

export const handleAvatarUpload = async (file: File | null | undefined) => {
  if (!file) return null;

  if (file.type.includes('image')) {
    const url = process.env.NEXT_URL + '/files?prefix=user-profile';
    const formData = new FormData();
    formData.append('file', file);
    const uploadImage = await axios
      .post(url, formData)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    const user = LocalStorage.getItem('user') as User;
    LocalStorage.remove('user');
    user.avatar_url = uploadImage.data.fileUrl;
    LocalStorage.set('user', user);

    return uploadImage.data.fileUrl;
  }
};

export const updateImageGraqhql = () => {
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
            message: 'La Imagen se actualizó correctamente.',
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
