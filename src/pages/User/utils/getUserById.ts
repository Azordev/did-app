import { User } from 'src/utils';
import { useRoute, useRouter } from 'vue-router';
import { getSpecificUser } from 'src/actions';
import { ref } from 'vue';
import { Notify } from 'quasar';

export const getUserbyId = async (id: string) => {
  const user = ref<User>();
  const route = useRoute();

  await getSpecificUser(id).then((res) => {
    user.value = res;

    if (!user.value) {
      const router = useRouter();

      Notify.create({
        message: 'Tuvimos problemas para encontrar al Usuario',
        type: 'negative',
      });

      router.back();
    }
  });
  return {
    id,
    user,
  };
};
