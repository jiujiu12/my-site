<template>
    <div id="userHome">

<!--      <button @click="changeLanguage()">切换语言</button>-->
<!--      <h1 v-model="title"></h1>-->
<!--      <h3>{{ $t('today') }}</h3>-->
      <!-- Header -->
      <header id="header">
        <div class="inner">
          <a href="index.html" class="logo">FUR</a>
          <nav id="nav">
            <router-link :to="{ name: 'home'}">主页</router-link>
            <a href="generic.html">小实现</a>
            <a href="elements.html">博客</a>
            <a href="elements.html">在线简历</a>
            <a href="elements.html">语言</a>
          </nav>
          <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
        </div>
      </header>

      <!-- Banner -->
      <section id="banner">
        <h1>Welcome to my world</h1>
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
              <footer>
                <router-link :to="{ name: 'todo'}" class="button special">去制定!</router-link>
              </footer>
            </article>
            <article>
              <header>
                <h3>我的日程</h3>
              </header>
              <p>记住时常看看未来几天有什么重要的事，不要错过彼此重要的日子~</p>
              <footer>
                <a href="#" class="button special">去确认</a>
              </footer>
            </article>
            <article>
              <header>
                <h3>记录</h3>
              </header>
              <p>写随笔，记录美好生活~</p>
              <footer>
                <a href="#" class="button special">去记录</a>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <!-- Two -->
      <section id="two" class="wrapper style1 special">
        <div class="inner">
          <header>
            <h2>小实现</h2>
            <p>前端相关的小实现</p>
          </header>
          <div class="flex flex-4">
            <div class="box person">
              <div class="image round">
                <img src="images/pic03.jpg" alt="Person 1" />
              </div>
              <h3>布局</h3>
              <p>瀑布流</p>
            </div>
            <div class="box person">
              <div class="image round">
                <img src="images/pic04.jpg" alt="Person 2" />
              </div>
              <h3>Ipsum</h3>
              <p>Vestibulum comm</p>
            </div>
            <div class="box person">
              <div class="image round">
                <img src="images/pic05.jpg" alt="Person 3" />
              </div>
              <h3>Tempus</h3>
              <p>Fusce pellentes</p>
            </div>
            <div class="box person">
              <div class="image round">
                <img src="images/pic06.jpg" alt="Person 4" />
              </div>
              <h3>Dolore</h3>
              <p>Praesent placer</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Three -->
      <section id="three" class="wrapper special">
        <div class="inner">
          <header class="align-center">
            <h2>工具</h2>
            <p> 在线工具</p>
          </header>
          <div class="flex flex-2">
            <article>
              <div class="image fit">
                <img src="images/pic01.jpg" alt="Pic 01" />
              </div>
              <header>
                <h3>计算器</h3>
              </header>
              <p>一个小型，轻量的在线计算器</p>
              <footer>
                <router-link :to="{ name: 'caculate'}" class="button special">去计算</router-link>
              </footer>
            </article>
            <article>
              <div class="image fit">
                <img src="images/pic02.jpg" alt="Pic 02" />
              </div>
              <header>
                <h3>Fusce pellentesque tempus</h3>
              </header>
              <p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.</p>
              <footer>
                <a href="#" class="button special">More</a>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer id="footer">
        <div class="inner">
          <div class="flex">
            <div class="copyright">
              &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com">Unsplash</a>.
            </div>
            <ul class="icons">
              <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon fa-linkedin"><span class="label">linkedIn</span></a></li>
              <li><a href="#" class="icon fa-pinterest-p"><span class="label">Pinterest</span></a></li>
              <li><a href="#" class="icon fa-vimeo"><span class="label">Vimeo</span></a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
</template>

<script>
    import i18n from '../i18n';
    export default {
        name: 'UserHome',
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

<style scoped>
  @import '../common/style/css/main.css';
</style>
