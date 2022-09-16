import axios from 'axios';

export const handleAvatarUpload = async (file: any) => {
  if (!file) return null;

  if (file.type.includes('image')) {
    const url = 'https://www.did-admin.tk/api/files/';
    const formData = new FormData();
    formData.append('image', file);
    const uploadImage = await axios
      .post(url, formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
};