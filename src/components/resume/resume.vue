<template>
<div  id="dowebok">
  <nav id="navbar" class="nav">
    <ul class="nav-list">
      <li>
        <router-link :to="{ name : 'home' }" class="left back"> >返回</router-link>
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
        href="https://codepen.io/freeCodeCamp/full/zNqgVx"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Tribute Page
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/freeCodeCamp/full/qRZeGZ"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/random-quote-machine.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Random Quote Machine
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/freeCodeCamp/full/wgGVVX"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/calc.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          JavaScript Calculator
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/freeCodeCamp/full/mVEJag"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/map.jpg"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Map Data Across the Globe
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/freeCodeCamp/full/wGqEga"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/wiki.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Wikipedia Viewer
          <span class="code">&#47;&gt;</span>
        </p>
      </a>
      <a
        href="https://codepen.io/freeCodeCamp/full/KzXQgy"
        target="_blank"
        class="project project-tile"
      >
        <img
          class="project-image"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tic-tac-toe.png"
          alt="project"
        />
        <p class="project-title">
          <span class="code">&lt;</span>
          Tic Tac Toe Game
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

  <footer>
    <span>&copy; Created by
      <a href="http://aaamiao.xyz" target="_blank"
      >Miaomiao </a> 冀ICP备2020021452号
    </span>
  </footer>

</div>
</template>
<script>
    export default {
        name: 'demo',
        methods: {
          mouseWheelHandle(id) {
              document.querySelector(`#${id}`).scrollIntoView(true);
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
