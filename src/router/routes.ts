import { RouteRecordRaw } from 'vue-router';
import { handleShoppingCart } from 'src/utils';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('src/layouts/MainLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/LandingPage/index.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login/index.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('pages/Signup/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    beforeEnter: () => {
      const { shoppingCart, clearShoppingCart } = handleShoppingCart();

      if (shoppingCart.value?.length) {
        clearShoppingCart();
      }
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/Home/index.vue'),
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('pages/Events/index.vue'),
        meta: { requiresMembershipActive: true },
      },
      {
        path: 'event/:event?',
        name: 'eventDetail',
        component: () => import('pages/Event/index.vue'),
        meta: { requiresMembershipActive: true },
      },
      {
        path: 'eventsCalendar',
        name: 'eventsCalendar',
        component: () => import('pages/EventsCalendar/index.vue'),
        meta: { requiresMembershipActive: true },
      },
      {
        path: 'providers',
        name: 'providers',
        component: () => import('pages/Providers/index.vue'),
        meta: { requiresMembershipActive: true },
      },
      {
        path: 'profile',
        name: 'userProfile',
        component: () => import('pages/User/index.vue'),
      },
      {
        path: 'settings',
        name: 'userSettings',
        component: () => import('pages/Settings/index.vue'),
      },
    ],
  },
  {
    path: '/provider',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    meta: { requiresAuth: true, requiresMembershipActive: true },
    children: [
      {
        path: ':provider',
        name: 'providerDetail',
        component: () => import('pages/Provider/index.vue'),
      },
      {
        path: ':provider/product/:id',
        name: 'productDetail',
        component: () => import('pages/Product/index.vue'),
      },
      {
        path: ':provider/shopping-cart',
        name: 'shoppingCart',
        component: () => import('pages/ShoppingCart/index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: () => import('pages/Error/ErrorNotFound.vue'),
  },
];

export default routes;
