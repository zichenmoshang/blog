import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => {
        require.ensure(['@/page/login'], () => {
          resolve(require('@/page/login'));
        }, 'home');
      }
    },
    {
      path: '/',
      name: 'home',
      component: resolve => {
        require.ensure(['@/page/home'], () => {
          resolve(require('@/page/home'));
        }, 'home');
      }
    }
  ]
});
