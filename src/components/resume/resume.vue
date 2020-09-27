<template>
<div  id="dowebok">

  <!-- START NAV SECTION -->

  <nav id="navbar" class="nav">
    <ul class="nav-list">
      <li>
        <a @click="back" class="left back"> >返回</a>
      </li>
      <li>
        <a @click="mouseWheelHandle('about')">关于</a>
      </li>
      <li>
        <a @click="mouseWheelHandle('projects')">项目</a>
      </li>
      <li>
        <a @click="mouseWheelHandle('contact')">联系</a>
      </li>
    </ul>
  </nav>

  <!-- END NAV SECTION -->

  <!-- START WELCOME SECTION -->

  <section id="about" class="welcome-section">
    <h1>Hey I am Miaomiao</h1>
    <p>I wanna to be a web developer</p>
    <a href="http://aaamiao.xyz/about/" class="more">
      More>>
    </a>
  </section>

  <!-- END WELCOME SECTION -->

  <!-- START PROJECTS SECTION -->

  <section id="projects" class="projects-section">
    <h2 class="projects-section-header">These are some of my projects</h2>

    <div class="projects-grid">
      <a
        href="https://codepen.io/jiujiu12/full/OJNqRgr"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/blog.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Sakura-blog
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/jiujiu12/full/YzqrmJz"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/snake.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Greedy-Snake
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/jiujiu12/full/qBbNqjM"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/heart.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          a beating-heart
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/jiujiu12/full/gOrEwqE"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/random-ball.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Random-ball
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="http://aaamiao.xyz/bootstrap/html/new_file.html"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/bootstrap-mock.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          BootStrap
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/jiujiu12/full/rNeRdrE"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/jiujiu12/poi/master/img/profile.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          profile
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
    </div>

    <a
      href="https://codepen.io/jiujiu12"
      class="btn btn-show-all"
      target="_blank"
    >Show all<i class="fas fa-chevron-right"></i
    ></a>
  </section>

  <!-- END PROJECTS SECTION -->

  <!-- START CONTACT SECTION -->

  <section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Let's work together...</h2>
    </div>
    <div class="contact-links">
      <a
        id="profile-link"
        href="https://github.com/jiujiu12"
        target="_blank"
        class="btn contact-details"
      ><i class="fab fa-github"></i> GitHub</a
      >
      <a href="mailto:FUR2020.outlook.com" class="btn contact-details"
      ><i class="fas fa-at"></i> Send a mail</a
      >
      <a href="tel:18834176546" title="Call me" class="btn contact-details"
      ><i class="fas fa-mobile-alt"></i> Call me</a
      >
    </div>
  </section>

  <!-- END CONTACT SECTION -->

  <!-- START FOOTER SECTION -->

    <my-footer></my-footer>

  <!-- END FOOTER SECTION -->

</div>
</template>
<script>
  import MyFooter from '../common/MyFooter';
    export default {
      name: 'demo',
      components: {MyFooter},
      methods: {
        /**
         * @param id
         * @desc 实现类似锚点功能
         */
          mouseWheelHandle(id) {
              document.querySelector(`#${id}`).scrollIntoView(true);
          },
          back() {
            this.storage = window.localStorage;
            let user = this.storage.getItem('username');
            user === 'r' ? this.$router.push('/rhome') : this.$router.push('/zhome');
          }
        }
    };
</script>

<style scoped>
@import "../../common/style/css/resume.css";
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem; /* 18px */
    font-weight: 400;
    line-height: 1.4;
    color: var(--main-white);
  }
  nav{
    border-radius: 0;
    height: 8rem;
  }
  h1, h2, p, footer{
    color: white;
  }
  a{
    transition:text-decoration 2s;
    transition:transform 2s;
    -moz-transition:text-decoration 2s; /* Firefox 4 */
    -webkit-transition:text-decoration 2s; /* Safari and Chrome */
    -o-transition:text-decoration 2s; /* Opera */
    -moz-transition:transform 2s; /* Firefox 4 */
    -webkit-transition:transform 2s; /* Safari and Chrome */
    -o-transition:transform 2s; /* Opera */
  }
  a:hover{
    text-decoration: underline;
    transform: translateY(8px);
  }
  .more{
    color: var(--main-red);
  }
  .back{
    position: absolute;
    left: 10%;
  }
</style>
