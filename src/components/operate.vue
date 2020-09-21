<template>
  <div class="page lists-show" v-show="!todo.isDelete">
    <!-- 头部模块 -->
    <nav>
      <!-- 当用户浏览车窗口尺寸小于40em时候，显示手机端的菜单图标 -->
      <div class="form list-edit-form" v-show="isUpdate">
        <!-- 当用户点击标题进入修改状态，就显示当前内容可以修改 -->
        <input
          type="text"
          class="titleup"
          :class="{disabled : todo.locked}"
          :title="lockedTitle"
          v-model="todo.title"
          @keyup.enter="updateTitle"
          :disabled="todo.locked"
        >
        <div class="nav-group right">
          <a class="nav-item" @click="isUpdate = false">
            <span class="icon-close">
            </span>
          </a>
        </div>
      </div>
      <div class="nav-group" @click="$store.dispatch('updateMenu')" v-show="!isUpdate">
        <!-- 在菜单的图标下面添加updateMenu时间，他可以直接调用vuex actions.js里面的updateMenu方法 -->
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <!-- 显示标题和数字模块 -->
      <h1 class="title-page" title="单击可修改" v-show="!isUpdate" @click="isUpdate = true">
        <span class="title-wrapper">{{todo.title}}</span>
        <!-- title:标题 绑定标题 -->
        <span class="count-list" :title="todo.count+'个未完成'">{{todo.count || 0}}</span>
        <!-- count:数量 绑定代办单项熟练-->
      </h1>
      <!-- 右边显示删除图标和锁定图标的模块 -->
      <div class="nav-group right" v-show="!isUpdate">
        <div class="options-web">
          <a class=" nav-item" @click="onlock">
            <span class="icon-lock" v-if="todo.locked" title="已锁定"></span>
            <span class="icon-unlock" v-else title="可编辑">
            </span>
          </a>
          <a class="nav-item">
            <span class="icon-trash" @click="onDelete">
            </span>
          </a>
        </div>
      </div>
      <!-- 用户新增代办事项的input模块 -->
      <div class=" form todo-new input-symbol">
        <!-- 绑定disabled值，当todo.locked为绑定的时候，禁止input输入,双向绑定text,和监听input的回车事件@keyup.enter -->
        <span class="icon-add" title="添加一个新的待办" @click="onAdd"></span>
        <input
                type="text"
               :class="{disabled : todo.locked}"
                :title="lockedTitle"
               class="newtodo"
               v-model="text"
               placeholder='TodoList'
               @keyup.enter="onAdd"
               :disabled="todo.locked"
        />
      </div>
    </nav>
    <!-- 列表主体模块 -->
    <div class="content-scrollable list-items">

      <ul class="tabs">
        <li><a title="全部待办" :class="{active:isActive === 'all'}" @click="isActive = 'all'">all</a></li>
        <li><a title="未完成" :class="{active:isActive === 'active'}" @click="isActive = 'active'">active</a></li>
        <li><a title="已完成" :class="{active:isActive === 'finish'}" @click="isActive = 'finish'">finish</a></li>
      </ul>
      <div v-for="(item,index) in counts">
        <item :item="item" :index="index" :id="todo.id" :init="init" :locked="todo.locked"></item>
      </div>
    </div>
  </div>
</template>
<script>

import item from './item';
import { addRecord, getTodo, editTodo } from '../api/api';
export default {
  data() {
    return {
      todo: {
        id: 0,
        title: '星期一',
        count: 12,
        isDelete: false,
        locked: false
      },
      items: [],
      text: '',
      isUpdate: false,
      isActive: 'all',
      lockedTitle: ''
    };
  },
  components: {
    item
  },
  computed: {
      // 统计已完成，未完成和全部待办
      counts: function () {
          if (this.isActive === 'all') {
            return this.items;
          } else if (this.isActive === 'active') {
            console.log(2);
            return this.items.filter((val, index) => {
               return val.checked === false;
            });
          } else {
            return this.items.filter((val, index) => {
              return val.checked === true;
            });
          }
      }
  },
  watch: {
    '$route.params.id'() {
      console.log('change');
      // 监听$route.params.id的变化，如果这个id即代表用户点击了其他的待办项需要重新请求数据。
      this.init();
    }
  },
  created() {
    console.log('hi');
    // created生命周期，在实例已经创建完成，页面还没渲染时调用init方法。
    this.init();
  },
  mounted() {
  },
  update() {
    alert(this.todo.locked);
    if (this.todo.locked) {
      this.lockedTitle = '项目已锁定';
    } else {
      this.lockedTitle = '';
    }
  },
  methods: {
    async init() {
      const ID = this.$route.params.id;
      await getTodo(ID).then(res => {
        console.log('id : ' + ID);
        let { id, title, count, isDelete, locked, record
        } = res.data;
        this.items = record;
        this.todo = {
          id: id,
          title: title,
          count: count,
          locked: locked,
          isDelete: isDelete
        };
      });
    },
    onAdd() {
      if (this.text === '') {
        return;
      }
      const ID = this.$route.params.id;
      addRecord({ fatherId: ID, text: this.text }).then(res => {
        this.text = '';
        this.init();
        this.$store.dispatch('getTodo');
      });
    },
    updateTodo() {
      let _this = this;
      editTodo(
        this.todo
      ).then(data => {
        // _this.init();
        _this.$store.dispatch('getTodo');
      });
    },
    updateTitle() {
      this.updateTodo();
      this.isUpdate = false;
    },
    onDelete() {
      this.todo.isDelete = true;
      this.updateTodo();
    },
    onlock() {
      this.todo.locked = !this.todo.locked;
      if (this.todo.locked) {
        this.lockedTitle = '项目已锁定';
      } else {
        this.lockedTitle = '';
      }
      this.updateTodo();
    }
  }
};
</script>
<link href="../common/style/less/nav.less" rel="stylesheet" />
<link href="../common/style/less/form.less" rel="stylesheet" />
<link href="../common/style/less/todo.less" rel="stylesheet" />
<style lang = "less">
  @import "../common/style/less/nav.less";
  /*@import "../common/style/less/form.less";*/
@import "../common/style/less/todo.less";
body{
/*<!--background-color: @main-gray !important;-->*/
}
input{
  font-family: 'Noto Serif CJK SC', 'Noto Serif CJK', 'Source Han Serif SC', 'Source Han Serif', source-han-serif-sc, serif;
}
input[checked]{
  opacity: 1 ;
  border: solid 1px transparent !important;
}
.list-items{
border-top: #a9b1bc solid 1px;
padding: 2rem;
background-color: white !important;
border-radius: 0 0 2rem 2rem;
}
.newtodo{
height: 1rem;
}
.titleup{
height: 4rem !important;
width: 92% !important;
}
  .tab {
    padding-top: 50px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    background: #fff;
    width: 70%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-weight: 300;
    color: #888;
    -webkit-font-smoothing: antialiased;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0;
    li {
      display: inline-block;
      line-height: 38px;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 33%;
    }

    a {
      background-color: #eff0f2;
      border-bottom: 1px solid #fff;
      color: #888;
      font-weight: 500;
      display: block;
      letter-spacing: 0;
      outline: none;
      padding: 0 20px;
      text-decoration: none;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      border-bottom: 2px solid $color;
    }
    a:hover, .active{
      background-color: #576bd7;
      color: white;
    }
  }

  .tabs_item {
    display: none;
    padding: 30px 0;

    h4 {
      font-weight: bold;
      color: $color;
      font-size: 20px;
    }

    img {
      width: 200px;
      float: left;
      margin-right: 30px;
    }

    &:first-child {display: block;}
  }

  .current a {
    color: #fff;
    background: $color;
  }
  .disabled{
    background-color: rgba(144, 144, 144, 0.075) !important;
  }
</style>
