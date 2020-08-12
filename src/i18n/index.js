import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
// 引入各个语言配置文件
import zh from './config/zh';
import en from './config/en';

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  // this.$i18n.locale
  // 通过切换locale的值来实现语言切换
  messages: {
    zh,   // 中文语言包
    en   // 英文语言包
  }
});
export default i18n;
