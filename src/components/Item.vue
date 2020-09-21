<template>
  <transition name="slide-fade">
    <div class="list-item  editingClass editing " :class="{checked: item.checked}" v-show="!item.isDelete">
      <label class="checkbox">
        <input type="checkbox" v-model="item.checked" name="checked" @change="onChange" :disabled="locked">
        <span class="checkbox-custom"></span>
      </label>
      <input type="text" v-model="item.text" placeholder=''  :disabled=" item.checked || locked" @keyup.enter="onChange">
      <a class="delete-item" v-if="item.checked && !locked" @click="item.isDelete = true;onChange()">
        <span class="icon-trash"></span>
      </a>
    </div>
  </transition>
</template>
<script>
// item 是todo的子组件,他接受一个对象item,来进行处理
import { editRecord } from '../api/api';
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: false,
          text: '你好,世界',
          isDelete: false,
          subId: 0
        };
      }
    },
    'index': {

    },
    'id': {

    },
    'init': {

    },
    'locked': {
    }
  },
  methods: {
    // 用户无论删除,修改，锁定都可以利用这个方法。
    onChange() {
      editRecord({
        fatherId: this.id, subId: this.item.subId, text: this.item.text, isDelete: this.item.isDelete, checked: this.item.checked
      }).then(data => {
        this.init();
        this.$store.dispatch('getTodo');
      });
    }
  }
};
</script>
<style lang="less">
@import '../common/style/less/list-items.less';
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 18px;
  margin-right: 10px;
  position: relative;
}
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
input[type="checkbox"]:checked::before {
  content: "\2713";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #d9d9d9;
  border-radius:4px;
  color: green;
  font-size: 20px;
  font-weight: bold;
}
  .checkbox{
    margin: auto;
  }
</style>
