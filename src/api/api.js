import axios from 'axios';
import qs from 'querystring';

const requestLogin = params => {
  return axios.post(`/login`, params).then(res => res.data);
};
/**
 * @return {ActiveX.IXMLDOMNode | Promise<any> | any | string | IDBRequest<any | undefined> | FormDataEntryValue | Function | Promise<Credential | null>}
 * @desc 获取所有待办清单接口
 */
const getTodoList = () => {
  return axios.get(`/todo/list`);
};

/**
 * @param params{Object} {id, title, isDelete, locked}
 * @return {PromiseLike<any> | Promise<any>}
 * @desc 编辑某个待办清单接口（修改标题）
 */
const editTodo = params => {
  return axios.post(`/todo/editTodo`, qs.stringify(params)).then(res => res.data);
};

/**
 * @param params 清单默认名：newList
 * @return {PromiseLike<any> | Promise<any>}
 * @desc 添加某个待办清单
 */
const addTodo = params => {
  return axios.post(`/todo/addTodo`, qs.stringify(params)).then(res => res.data);
};

/**
 * @param id 所属的待办清单id
 * @return {ActiveX.IXMLDOMNode | Promise<any> | any | string | IDBRequest<any | undefined> | FormDataEntryValue | Function | Promise<Credential | null>}
 * @desc 获取某个待办清单待办事项接口
 */
const getTodoItems = (id) => {
  return axios.get(`/todo/listId`, {
    params: {
      id: id
    }
  });
};

/**
 * @param params{Object} {fatherId, text}
 * @return {PromiseLike<any> | Promise<any>}
 * @desc 给某个待办清单添加待办事项接口
 */
const addRecord = params => {
  return axios.post(`/todo/addRecord`, qs.stringify(params)).then(res => res.data);
};

/**
 * @param params{Object} {fid, sid, text, isDelete, checked}
 * @return {PromiseLike<any> | Promise<any>}
 * @desc 编辑某个待办清单的待办事项接口
 */
const editRecord = params => {
  return axios.post(`/todo/editRecord`, qs.stringify(params)).then(res => res.data);
};

export {requestLogin, getTodoList, getTodoItems, addRecord, editTodo, editRecord, addTodo};

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
