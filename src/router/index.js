import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/pre/home'
  },
  {
    path: '/pre',
    name: 'pre',
    component: resolve => {
      require.ensure(['@/page/pre/index'], () => {
        resolve(require('@/page/pre/index'));
      }, 'pre');
    },
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          access: true
        },
        component: resolve => {
          require.ensure(['@/page/pre/login'], () => {
            resolve(require('@/page/pre/login'));
          }, 'login');
        }
      },
      {
        path: 'home',
        name: 'home',
        meta: {
          access: true
        },
        component: resolve => {
          require.ensure(['@/page/pre/home'], () => {
            resolve(require('@/page/pre/home'));
          }, 'home');
        }
      }
    ]
  }
];

const router = new Router({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  /* login */
  if (!to.meta.access) {
    if (!sessionStorage.getItem('accessToken')) {
      next({
        path: '/pre/login'
      });
      return;
    }
  }

  /* redirect to '/' when routes not match */
  if (!to.matched.length) {
    next('/');
  } else {
    next();
  }
});

export default router;

