<template>
  <div class="list-todos">
    <!--循环展示所有代办清单-->
    <div class="btns-group-vertical">
      <button
        class="list-todo list activeListClass btn-secondary"
        :class="{'active': item.id === todoId}"
        v-for="(item,index) in todoList"
        :key="index"
        @click="goList(item.id)"
      >

        <span class="count-list" v-if="item.count > 0" :title="item.count+'个未完成'">{{item.count}}</span>
        {{item.title}}
      </button>
      <!--新增待办清单-->
      <button class="link-list-new" @click="addTodoList">
      <span class="icon-plus">
      </span>
        新增待办清单
      </button>
    </div>
  </div>
</template>
<script>
import { addTodo } from '../api/api';
export default {
  data() {
    return {
      items: [], // 菜单数据
      todoId: '', // 默认选中id,
      todoNum: 0 // 新增一个状态来判断代办事项的数据
    };
  },
  watch: {
    'todoId'(id) {
      this.$router.push({ name: 'operate', params: { 'id': id } });
    }
  },
  created() { // 调用请求菜单列表数据的接口
    // getTodoList({}).then(res => {
    //   const TODOS = res.data.todos; // 数据都会返回在res.data里面。
    //   this.items = TODOS; // 我的把菜单数据赋值给定义的this.items
    //   this.todoId = TODOS[0].id; // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
    // });
    this.$store.dispatch('getTodo').then(() => { // 调用vuex actions.js 里面的 getTodo函数
      this.$nextTick(() => {
        this.goList(this.todoList[0].id);
      });
    });
  },
  computed: {
    todoList() {
      console.log('list' + this.$store.getters.getTodoList);
      const number = this.$store.getters.getTodoList.length;
      if (this.$store.getters.getTodoList.length < this.todoNum) {
        this.goList(this.$store.getters.getTodoList[0].id);
      }
      this.todoNum = number;
      return this.$store.getters.getTodoList; // 返回vuex getters.js 定义的getTodoList数据
    }
  },
  methods: {
    goList(id) { // 点击菜单时候,替换选中id
      this.todoId = id;
    },
    addTodoList() { // 点击新增按钮时候
      // 调用vuex actions.js 里面的 getTodo函数
      addTodo({title: 'newList'}).then(data => {
        this.$store.dispatch('getTodo').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.goList(this.todoList[this.todoList.length - 1].id);
            }, 100);
          });
        });
      });
    }
  }
};
</script>

<style lang="less">
@import '../common/style/less/menu.less';
</style>

