<template>
    <div id="userHome">

<!--      <button @click="changeLanguage()">切换语言</button>-->
<!--      <h1 v-model="title"></h1>-->
<!--      <h3>{{ $t('today') }}</h3>-->
      <!-- Banner -->
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
                <a href="#" class="button special">去确认</a>
              </div>
            </article>
            <article>
              <header>
                <h3>组件</h3>
              </header>
              <p>公共组件库</p>
              <div>
                <a href="#" class="button special">去查看</a>
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
        name: 'UserHome',
        components: {MyNav, NavPanel, MyFooter},
        data() {
          const vm = window.vm;
           return {
              vm: vm,
             title: ''
           };
        },
      mounted() {
          this.title = i18n.t('welcome');
      },
      methods: {
        changeLanguage(type) {
          window.localStorage.setItem('locale', type);
          window.location.reload();
        }
      }
    };
</script>

<style lang="less" scoped>
  @import '../common/style/css/main.css';
</style>
