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
  console.log(todos[0])
  return {type: types.LOAD_TODOS_SUCCESS, todos};
}
