import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function user(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;

    case types.CREATE_TODO_SUCCESS:
      return [...state, action.todo];
    
    default:
      return state;
  }
}