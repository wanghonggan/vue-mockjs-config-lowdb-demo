import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/user/list' },
  {
    path: '/user/list',
    name: 'user/list',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/user/index.vue'),
  },
  {
    path: '/goods/list',
    name: 'goods/list',
    component: () =>
      import(/* webpackChunkName: "goods" */ '../views/goods/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
