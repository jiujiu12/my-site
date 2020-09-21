// const axios = window.vm.$addr;
import axios from 'axios';
import qs from 'querystring';
const requestLogin = params => {
  return axios.post(`/login`, params).then(res => res.data);
};
const getTodoList = () => {
  console.log(axios.defaults.baseURL);
  return axios.get(`/todo/list`);
};

const getTodo = (id) => {
  return axios.get(`/todo/listId`, {
    params: {
      id: id
    }
  });
};

const addRecord = params => {
  return axios.post(`/todo/addRecord`, qs.stringify(params)).then(res => res.data);
};

const editTodo = params => {
  return axios.post(`/todo/editTodo`, qs.stringify(params)).then(res => res.data);
};
const editRecord = params => {
  return axios.post(`/todo/editRecord`, qs.stringify(params)).then(res => res.data);
};

const addTodo = params => {
  return axios.post(`/todo/addTodo`, qs.stringify(params)).then(res => res.data);
};
export {requestLogin, getTodoList, getTodo, addRecord, editTodo, editRecord, addTodo};
// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
