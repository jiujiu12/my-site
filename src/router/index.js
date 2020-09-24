import Vue from 'vue';
import Router from 'vue-router';
import todo from '../components/todo';
import operate from '../components/operate';
import layout from '../components/layout';
import UserHome from '@/pages/UserHome';
import resume from '../components/resume/resume';
import fullPage from '../components/resume/fullPage';
import login from '../components/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'src',
      component: layout,
      children: [
        {
          path: '',
          name: 'home',
          component: UserHome
        },
        {
          path: '/page',
          name: 'page',
          component: fullPage
        }
      ]
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/todo/:id',
      component: todo,
      children: [
        {
          path: '',
          name: 'operate',
          component: operate
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});
