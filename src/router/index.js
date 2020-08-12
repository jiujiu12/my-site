import Vue from 'vue';
import Router from 'vue-router';
import layouts from '@/components/layouts';
// import Login from '@/components/Login';
import UserHome from '@/components/UserHome';
import todo from '@/components/todo';
import demo from '../components/demo/demo';
import caculate from '../components/demo/caculate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserHome
    },
    {
      path: '/todo',
      name: 'todo',
      component: layouts,
      children: [
        {path: ':id', name: 'todo', component: todo}
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/caculate',
      name: 'caculate',
      component: caculate
    }
  ]
});
