import { User } from 'src/utils';
import { useRoute, useRouter } from 'vue-router';
import { getSpecificUser } from 'src/actions';
import { ref } from 'vue';
import { Notify } from 'quasar';

export const getUserbyId = async () => {
  const user = ref<User>();
  const route = useRoute();
  const id = 'b5ca33ca-fd87-4858-a285-e15429c6dd9b';

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
  console.log(user.value);
  return {
    id,
    user,
  };
};
