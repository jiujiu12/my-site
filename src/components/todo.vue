<template>
      <div id="todo"   :class="{'menu-open': menuOpen}">
        <div class="wrapper inner">

          <!--导航条-->
          <nav id="navbar" class="nav goback">
            <ul class="nav-list">
              <li>
                <router-link :to="{ name : 'home' }" class="left back"> >返回</router-link>
              </li>
            </ul>
          </nav>
          <!--/导航条-->

           <div class="todo box">
             <div class="container contain">

               <!--菜单-->
               <section class="menu">
                 <menus
                   :param-id = "todoId"
                   :todo="todo"
                   @go = "goList"
                 ></menus>
               </section>
               <!--/菜单-->

               <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>

               <!--详细-->
               <div class="content-container todo-right">
                 <router-view :todo = 'todo' @emitTodo = 'onTodo'></router-view>
               </div>
               <!--/详细-->

             </div>

          </div>
          <!--页脚-->
          <footer >
             <span>&copy; Created by
              <a href="http://aaamiao.xyz" target="_blank"
              >Miaomiao </a> 冀ICP备2020021452号
            </span>
              <a>了解更多>></a>
          </footer>
          <!--/页脚-->
        </div>
      </div>
</template>

<script>
import menus from './menus';
import todo from './operate';
import MyNav from './common/MyNav';
export default {
  name: 'todo',
  data() {
    return {
      todoId: '',
      todo: {
        id: 0,
        title: '星期一',
        count: 12,
        isDelete: false,
        locked: false
      }
    };
  },
  components: {
    menus,
    todo,
    MyNav
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    }
  },
  watch: {
    'todoId'(id) {
      this.$router.push({ name: 'operate', params: { 'id': id } });
    }
  },
  methods: {
    /**
     * @param item
     * @desc 点击菜单时候,替换选中id
     */
    goList(item) {
      this.todoId = item.id;
      this.todo = item;
    },
    onTodo(todo) {
      this.todo = todo;
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
