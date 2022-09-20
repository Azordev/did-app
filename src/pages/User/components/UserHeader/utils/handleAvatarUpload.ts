import axios from 'axios';

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

    return uploadImage.data.fileUrl;
  }
};
