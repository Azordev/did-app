import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { LocalStorage, Notify } from 'quasar';
import routes from './routes';
import { handleUserData, User } from 'src/utils';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to) => {
    const user = LocalStorage.getItem('user') as User;

    if (user && to.name === 'login') {
      return { name: 'dashboard' };
    }

    if (to.meta.requiresAuth && !user) {
      return { name: 'login', query: { to: to.path } };
    }

    const { parseUserData } = handleUserData();

    const { isMembershipActive } = parseUserData(user);

    if (to.meta.requiresMembershipActive && !isMembershipActive) {
      Notify.create({
        message: 'Por favor renueva tu membresia para acceder a esta seccion.',
        type: 'negative',
      });
      return { name: 'dashboard' };
    }
  });

  return Router;
});
