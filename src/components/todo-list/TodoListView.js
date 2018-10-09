import React, { Component } from 'react';
import Todo from '../todo/Todo';
import { FlatButton } from 'material-ui';

const TodoListView = (props) => {
  let todos = props.todos;
  console.log(props)
  if (!props.displayArchived) {
    todos = todos.filter((todo) => todo.status !== 'archived');
  }
  return (
    <div>
      <h2>Current list of Todo Items</h2>
      <FlatButton onClick={props.toggleArchived.bind(this)}>
      {props.displayArchived ? 'Hide Archived' : 'Display Archived' }
      </FlatButton>
      {todos.map((todo) => {
        return <Todo todo={todo} />
      })}
    </div>
  )
}

export default TodoListView;