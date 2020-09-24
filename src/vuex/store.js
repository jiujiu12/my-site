import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  todoList: [],
  menuOpen: false,
  paramId: 1
};

const mutations = {
  EDITTODE(state, data) { // 定义名为 EDITTODE函数用作改变todoList的值
    state.todoList = data;
  },
  MENUOPEN(state) { // 定义名为 MENUOPEN函数用作改变menuOpen的值
    state.menuOpen = !state.menuOpen;
  },
  CHANGEPID(state, data) {
    state.paramId = data;
  }
};

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
