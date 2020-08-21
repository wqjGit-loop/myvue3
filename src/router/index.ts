import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';


Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/testView/tesview1.vue')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../views/testView/tesview1.vue')
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
