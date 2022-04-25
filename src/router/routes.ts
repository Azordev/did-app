import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/LandingPage/index.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login/index.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/Register/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('src/pages/Home/index.vue'),
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('pages/Events/index.vue'),
      },
      {
        path: 'events/:event?',
        name: 'eventDetail',
        component: () => import('pages/Event/index.vue'),
      },
      {
        path: 'marketplace',
        name: 'products',
        component: () => import('pages/Products/index.vue'),
      },
      {
        path: 'marketplace/product/:id?',
        name: 'productDetail',
        component: () => import('pages/Product/index.vue'),
      },
      {
        path: 'providers',
        name: 'providers',
        component: () => import('pages/Providers/index.vue'),
      },
      {
        path: 'providers/:provider?',
        name: 'providerDetail',
        component: () => import('pages/Provider/index.vue'),
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: () => import('src/pages/Error/ErrorNotFound.vue'),
  },
];

export default routes;
