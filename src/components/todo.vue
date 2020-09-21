<template>
      <div id="todo"   :class="{'menu-open': menuOpen}">
        <div class="wrapper inner">
          <nav id="navbar" class="nav goback">
            <ul class="nav-list">
              <li>
                <router-link :to="{ name : 'home' }" class="left back"> >返回</router-link>
              </li>
            </ul>
          </nav>

           <div class="todo box">
             <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
             <div class="container contain">
               <section class="menu">
                 <menus></menus>
               </section>
               <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
               <!-- 这个是当页面收缩覆盖在内容上面的模糊层，点击后复原,他可以直接调用vuex actions.js里面的updateMenu方法 -->
               <div class="content-container todo-right">
                 <router-view></router-view>
               </div>

             </div>

          </div>
          <footer >
           <span>&copy; Created by
            <a href="http://aaamiao.xyz" target="_blank"
            >Miaomiao </a> 冀ICP备2020021452号
          </span>
            <a>了解更多>></a>
          </footer>
        </div>
      </div>
</template>

<script>
import menus from './menus';
import todo from './operate';
import MyNav from './common/MyNav';
export default {
  name: 'todo',
  components: {
    menus,
    todo,
    MyNav
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    }
  }
};
</script>

<style lang="less">
@import '../common/style/less/layouts.less';
@import "../common/style/css/main.css";
#todo{
  width: 100%;
  height: 100%;
  background-color: @main-gray;
}
.todo{
  position: relative;
  height: 600px;
  width: 100%;
    .contain{
      position: absolute;
      top: 9rem;
    }
}
.head-box{
  margin-bottom: 0 !important;
  h1{
    font-size: 24px;
  }
}
  .contain{
    padding: 6em 6em 2em 6em;
  }
  nav{
    border-radius: 2rem 2rem 0 0;
  }
  .goback{
    border-radius: 0;
    height: 8rem;
  }
.back{
  position: absolute;
  left: 10%;
}
</style>
