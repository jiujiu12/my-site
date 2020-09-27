<template>
  <div class="list-todos">
    <!-- 循环展示所有代办清单-->

      <div class="nav-group" @click="$store.dispatch('updateMenu')" v-show="!isUpdate">
        <!-- 在菜单的图标下面添加updateMenu时间，他可以直接调用vuex actions.js里面的updateMenu方法 -->
        <a class="nav-item">
            <span class="icon-close" style="color: black">
            </span>
        </a>
      </div>

      <div class="btns-group-vertical">
      <a
        v-for="(item,index) in todoList"
        :key="index"
        class="list-todo list activeListClass btn-secondary"
        :class="{'active': item.id === paramId}"
        @click="changeId(item)"
      >

        <!-- 锁定-->
          <span class="icon-lock" v-if="item.locked" title="已锁定" @click="lock(item)"></span>
          <span class="icon-unlock" v-else title="可编辑" @click="lock(item)"></span>
        <!--/ 锁定-->

        <!-- 统计数量-->
          <span class="count-list" v-if="item.count > 0" :title="item.count+'个未完成'">{{item.count}}</span>
        <!--/ 统计数量-->

        <!-- 待办清单名-->
          {{item.title}}
        <!--/待办清单名-->

        <!--删除-->
          <span class="icon-trash" @click="delList(item)"></span>
        <!--/删除-->

      </a>

      <!--新增待办清单-->
        <button class="link-list-new" @click="addTodoList">
          <span class="icon-plus"></span>
          新增待办清单
        </button>
      <!--/新增待办清单-->

    </div>
    <!--/ 循环展示所有代办清单-->
  </div>
</template>
<script>
  import {addTodo, editTodo} from '../api/api';
export default {
  // 默认选中ID
  props: ['paramId', 'todo'],
  data() {
    return {
      // 待办清单长度
      todoNum: 0
    };
  },
  created() {
    // 初次调用，若url里的param不存在，自动定位到list里的第一个元素
    this.$store.dispatch('getTodoItems').then(() => {
      this.$nextTick(() => {
        this.changeId(this.todoList[0]);
      });
    });
  },
  computed: {
    /**
     * @return todoList vuex里state的todoList
     * @desc todoList值变化时触发
     **/
    todoList() {
      // todoList的长度，包含已被删除元素
      const newLength = this.$store.getters.getTodoList.length;
      // vuex里的todoList长度若是小于原长度，更改选中的todoId
      if (newLength < this.todoNum) {
        this.changeId(this.$store.getters.getTodoList[0]);
      }
      // 将现在的todoList长度赋值给todoNum
      this.todoNum = newLength;
      // 过滤掉已经被删除的元素不再展示
      return this.$store.getters.getTodoList.filter((item) => {
        return !item.isDelete;
      });
    }
  },
  methods: {
    /**
     * @param item
     * @desc 点击某个待办清单的时候,向父组件传递被选中元素值，改变被选中id和todo
     */
    changeId(item) {
      // console.log(arguments);
      this.$emit('go', item);
    },
    /**
     * @desc 点击新增按钮时候触发
     */
    addTodoList() {
      // 点击新增，默认title名为newList
      addTodo({title: 'newList'}).then(data => {
        this.$store.dispatch('getTodoItems').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.changeId(this.todoList[this.todoList.length - 1]);
            }, 100);
          });
        });
      });
    },
    /**
     * @param item 需要更新某个清单
     * @desc 菜单栏可以删除或锁定某个清单
     */
     updateTodo(item) {
      let _this = this;
      editTodo(
        {
          id: item.id,
          title: item.title,
          isDelete: item.isDelete,
          locked: item.locked
        }
      ).then(data => {
        // _this.init();
        _this.$store.dispatch('getTodoItems');
        //   .then(() => {
        //   this.$nextTick(() => {
        //     setTimeout(() => {
        //       this.changeId(_this.todoList[0]);
        //     }, 100);
        //   });
        // });
      });
    },
    /**
     * @param item 被删除元素
     * @desc 删除待办清单
     */
    delList(item) {
      item.isDelete = true;
      this.updateTodo(item);
      this.$nextTick(() => {
        setTimeout(() => {
          this.changeId(this.todoList[0]);
        }, 100);
      });
    },
    /**
     * @param item 被点击锁的元素
     * @desc 锁定待办清单
     */
    lock(item) {
      item.locked = !item.locked;
      this.updateTodo(item);
    }
  }
};
</script>

<style lang="less">
@import '../common/style/less/menu.less';
  // 锁定图标样式
  .icon-unlock, .icon-lock{
    right: 15rem !important;
    top: 1.5rem !important;
    font-size: 14px !important;
  }
  .icon-trash{
    top: 1.5rem !important;
  }
  /*滚动条样式*/
  .menu::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  .menu::-webkit-scrollbar-thumb {
    border-radius: 10px !important;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #5a5a5a;
  }
  .menu::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px !important;
    background-color: #F5F5F5;
  }
</style>

