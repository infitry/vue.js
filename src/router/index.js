import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import TestCom from '@/components/TestCom'

Vue.use()

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'testComponent',
      component: TestCom
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['HelloWorld', 'Login'];
  const authRequired = !publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    router.push({name: 'Login', query: {to: to.path}});
  } else {
    next();
  }
});

export default router