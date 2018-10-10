import React from 'react';
import Todo from '../todo/Todo';
import { RaisedButton } from 'material-ui';
import _ from 'underscore';

const TodoListView = (props) => {
  let todos = props.todos;
  if (!props.displayArchived) {
    todos = todos.filter((todo) => todo.status !== 'archived');
  }
  // sorting
  if (props.orderType === 'title') {
    todos = _.sortBy(todos, 'title');
  }
  if (props.orderType === 'dateDue') {
    todos = _.sortBy(todos, 'dateDue');
  }
  if (props.orderType === 'createdAt') {
    todos = _.sortBy(todos, 'createdAt').reverse();
  }

  let buttonLabel = props.displayArchived ? 'Hide Archived' : 'Display Archived';
  return (
    <div>
      <h2>Current list of Todo Items</h2>
      <RaisedButton onClick={props.toggleArchived.bind(this)} label={buttonLabel} />
      <br />
      <RaisedButton onClick={props.order.bind(this, 'title')} label='Order By Title' />
      <RaisedButton onClick={props.order.bind(this, 'dateDue')} label='Order By Due Date' />
      <RaisedButton onClick={props.order.bind(this, 'createdAt')} label='Order By Date Created' />

      {todos.map((todo) => {
        return <Todo todo={todo} key={todo._id} />
      })}
    </div>
  )
}

export default TodoListView;