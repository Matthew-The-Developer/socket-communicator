import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Connection from '@/views/Connection.vue';
import Message from '@/views/Message.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Connection',
    component: Connection,
    beforeEnter: (to, from, next) => {
      store.commit('appbar/visible', false)
      next();
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    beforeEnter: (to, from, next) => {
      store.commit('appbar/visible', true);
      next();
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Connection' && !store.getters['connection/valid']) {
    next({ name: 'Connection' });
  } else {
    next();
  }
})

export default router;
