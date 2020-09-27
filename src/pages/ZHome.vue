<template>
  <div id="ZHome">

    <!--      <button @click="changeLanguage()">切换语言</button>-->
    <!--      <h1 v-model="title"></h1>-->
    <!--      <h3>{{ $t('today') }}</h3>-->
    <!-- Banner -->

    <header id="header">
      <div class="inner">
        <a  class="logo">FUR</a>
        <nav id="nav">
          <router-link :to="{ name: 'zhome'}">主页</router-link>
          <a href="http://zhangxiaoshuai.top/">博客</a>
          <a href="static/resume.html">在线简历</a>
        </nav>
      </div>
      <a class="navPanelToggle" @click="getNavPanel('#navPanel')">
        <span class="fa fa-bars"></span>
      </a>
      <nav-panel :is-visible="isVisible"></nav-panel>
    </header>

    <section id="banner">
      <h1>Just to do it!</h1>
    </section>

    <!-- One -->
    <section id="one" class="wrapper">
      <img src="../assets/favicon1.png">
      <div class="inner">
        <div class="flex flex-3">
          <article>
            <header>
              <h3>开始新的一天</h3>
            </header>
            <p>制定计划是新的一天的开始，让我们添加代办事项，开始自律的一天吧~</p>
            <div>
              <router-link :to="{ name: 'operate', params: {id : 1}}" class="button special">去制定!</router-link>
            </div>
          </article>
          <article>
            <header>
              <h3>我的日程</h3>
            </header>
            <p>记住时常看看未来几天有什么重要的事，不要错过彼此重要的日子~</p>
            <div>
              <router-link :to="{ name: 'calendar' }" class="button special">去确认</router-link>
            </div>
          </article>
          <article>
            <header>
              <h3>计算器</h3>
            </header>
            <p>来计算吧~</p>
            <div>
              <router-link :to="{ name: 'caculate' }" class="button special">去计算</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>




  </div>
</template>

<script>
  import i18n from '../i18n';
  import MyFooter from '../components/common/MyFooter';
  import NavPanel from '../components/common/NavPanel';
  import MyNav from '../components/common/MyNav';
  export default {
    name: 'ZHome',
    components: {MyNav, NavPanel, MyFooter},
    data() {
      const vm = window.vm;
      return {
        vm: vm,
        title: '',
        isVisible: false,
        storage: ''
      };
    },
    created() {
      this.storage = window.localStorage;
      this.storage.setItem('username', 'z');
    },
    mounted() {
      this.title = i18n.t('welcome');
    },
    methods: {
      changeLanguage(type) {
        window.localStorage.setItem('locale', type);
        window.location.reload();
      },
      getNavPanel(idName) {
        document.querySelector(idName).scrollIntoView(true);
        this.isVisible = !this.isVisible;
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../common/style/css/main.css';
  article{
    font-family: 'Noto Serif CJK SC', 'Noto Serif CJK', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc, serif;
  }
</style>
