import React, { Component } from 'react';
import Todo from '../todo/Todo';

const TodoListView = (props) => {
  return (
    <div>
      <h2>Current list of Todo Items</h2>
      {props.todos.map((todo) => {
        return <Todo todo={todo} />
      })}
    </div>
  )
}

export default TodoListView;