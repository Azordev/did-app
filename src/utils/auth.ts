import { LocalStorage } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { User } from './apollo.types';

export const getUser = (): User => {
  const user = LocalStorage.getItem('user') as User;

  if (!user) {
    LocalStorage.clear();
    const router = useRouter();
    const route = useRoute();

    router.push({ name: 'login', query: { to: route.path } });
  }

  return user;
};
