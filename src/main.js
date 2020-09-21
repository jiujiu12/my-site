import Vue from 'vue';
import App from './App';
import router from './router';
// import Mock from './mock';
import store from './vuex/store';
import il8n from './i18n';
// Mock.start(); 取消mock
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;
Vue.prototype.$addr = axios;

window.vm = new Vue({
  el: '#app',
  router,
  il8n,
  store,
  template: '<App/>',
  components: {
    App
  }
});
