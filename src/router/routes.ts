import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/LandingPage/index.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login/index.vue') },
      { path: 'register', component: () => import('pages/Register/index.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/index.vue') },
      { path: 'events', component: () => import('pages/Events/index.vue') },
      {
        path: 'events/:event',
        component: () => import('pages/Event/index.vue'),
      },
      {
        path: 'marketplace',
        component: () => import('pages/Products/index.vue'),
      },
      {
        path: 'marketplace/product/:id',
        component: () => import('pages/Product/index.vue'),
      },
      { path: 'profile', component: () => import('pages/User/index.vue') },
      { path: 'settings', component: () => import('pages/Settings/index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error/ErrorNotFound.vue'),
  },
];

export default routes;
