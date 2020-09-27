import Vue from 'vue';
import Router from 'vue-router';
import todo from '../components/todo';
import operate from '../components/operate';
import layout from '../components/layout';
import UserHome from '@/pages/UserHome';
import resume from '../components/resume/resume';
import fullPage from '../components/resume/fullPage';
// import login from '../components/login';
import caculate from '../components/resume/caculate';
import ZHome from '../pages/ZHome';
import calendar from '../components/resume/calendar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'src',
      component: layout,
      children: [
        {
          path: '/rhome',
          name: 'rhome',
          component: UserHome
        },
        {
          path: '/zhome',
          name: 'zhome',
          component: ZHome
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
      path: '/caculate',
      name: 'caculate',
      component: caculate
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }
  ]
});
