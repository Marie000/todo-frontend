import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'underscore';


export default function user(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;

    case types.CREATE_TODO_SUCCESS:
      return [...state, action.todo];
    
    case types.UPDATE_TODO_SUCCESS: {
      let index = _.findIndex(state, (todofound) => todofound._id === action.todo._id);
      return [...state.slice(0, index),
        action.todo,
        ...state.slice(index + 1)];
    }

    default:
      return state;
  }
}