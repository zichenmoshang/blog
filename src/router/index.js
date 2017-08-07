import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/blog/home'
  },
  {
    path: '/blog',
    name: 'blog',
    component: resolve => {
      require.ensure(['@/page/blog/index'], () => {
        resolve(require('@/page/blog/index'));
      }, 'blog');
    },
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          level: 0
        },
        component: resolve => {
          require.ensure(['@/page/blog/login'], () => {
            resolve(require('@/page/blog/login'));
          }, 'login');
        }
      },
      {
        path: 'home',
        name: 'home',
        meta: {
          level: 0
        },
        component: resolve => {
          require.ensure(['@/page/blog/home'], () => {
            resolve(require('@/page/blog/home'));
          }, 'home');
        }
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: resolve => {
      require.ensure(['@/page/manage/index'], () => {
        resolve(require('@/page/manage/index'));
      }, 'manage');
    },
    children: [
      {
        path: 'note',
        name: 'note',
        meta: {
          level: 1
        },
        component: resolve => {
          require.ensure(['@/page/manage/note'], () => {
            resolve(require('@/page/manage/note'));
          }, 'note');
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
  if (to.meta.level === 1) {
    if (!sessionStorage.getItem('accessToken')) {
      next({
        path: '/blog/login'
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

