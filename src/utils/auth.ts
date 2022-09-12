import { LocalStorage, Notify } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { User } from './apollo.types';

export const getUser = (): User => {
  const user = LocalStorage.getItem('user') as User;

  if (!user) {
    LocalStorage.clear();
    const router = useRouter();
    const route = useRoute();

    Notify.create({
      message:
        'Hemos tenido problemas para localizar tu usuario, por favor inicia sesion nuevamente.',
      type: 'Negative',
    });

    router.push({ name: 'login', query: { to: route.path } });
  }

  return user;
};
