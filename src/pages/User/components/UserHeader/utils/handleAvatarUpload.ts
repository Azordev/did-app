import axios from 'axios';
import { User } from 'src/utils/apollo.types';
import { LocalStorage } from 'quasar';

export const handleAvatarUpload = async (file: File | null | undefined) => {
  if (!file) return null;

  if (file.type.includes('image')) {
    const url = 'https://www.did-admin.tk/api/files?prefix=user-profile';
    const formData = new FormData();
    formData.append('file', file);
    const uploadImage = await axios
      .post(url, formData)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    const user = LocalStorage.getItem('user') as User;
    LocalStorage.clear();
    user.avatar_url = uploadImage.data.fileUrl;
    LocalStorage.set('user', user);

    return uploadImage.data.fileUrl;
  }
};
