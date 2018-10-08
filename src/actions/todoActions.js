import * as types from './actionTypes';
import axios from 'axios';
const api = 'http://localhost:9000';

export function loadTodos() {
  return dispatch => {
    return axios.get(api + '/todo-items').then(result => {
      dispatch(loadTodosSuccess(result.data));
    }).catch(error => {
      throw(error);
    });
  };
}

function loadTodosSuccess(todos) {
  return {type: types.LOAD_TODOS_SUCCESS, todos};
}

export function createTodo(todo) {
  return dispatch => {
    return axios.post(api + '/todo-items', todo).then(result => {
      dispatch(createTodoSuccess(result.data));
    }).catch(error => {
      throw(error);
    });
  };
}

function createTodoSuccess(todo) {
  return {type: types.CREATE_TODO_SUCCESS, todo};
}

export function updateTodo(id, update) {
  return dispatch => {
    return axios.patch(api + `/todo-items/${id}`, update).then(result => {
      dispatch(updateTodoSuccess(result.data));
    }).catch(error => {
      throw(error);
    });
  };
}

function updateTodoSuccess(todo) {
  return {type: types.UPDATE_TODO_SUCCESS, todo}
}
