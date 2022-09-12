import { Notify } from 'quasar';
import { updateUserPassword } from 'src/actions';
import { ref } from 'vue';

export const handleUserPassword = () => {
  const isLoading = ref<boolean>(false);
  const isEditingPassword = ref<boolean>(false);
  const seePassword = ref<boolean>(false);
  const newPassword = ref<string>('');

  const onUpdateUserPassword = (id: string, password: string) => {
    isLoading.value = true;

    return new Promise<void>((resolve, reject) => {
      updateUserPassword(id, password)
        .then(() => {
          newPassword.value = '';
          isEditingPassword.value = false;
          seePassword.value = false;

          Notify.create({
            type: 'positive',
            message: 'User password updated successfully',
          });
          resolve();
        })
        .catch(() => {
          Notify.create({
            message: 'Something went wrong, please try again.',
            type: 'negative',
          });
          reject();
        })
        .finally(() => {
          isLoading.value = false;
        });
    });
  };

  return {
    isEditingPassword,
    seePassword,
    newPassword,
    isLoading,
    onUpdateUserPassword,
  };
};
