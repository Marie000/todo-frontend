import React from 'react';
import { Paper, FlatButton, TextField } from 'material-ui';
import TodoTitle from './TodoTitle';
import TodoDescription from './TodoDescription';
import TodoStatus from './TodoStatus';

const TodoView = (props) => {
  console.log(props)
  return (
    <Paper>
      <TodoTitle 
        todo={props.todo} 
        toggleEditTitle={props.toggleEditTitle}
        editTitle={props.editTitle}
        updateTodo={props.updateTodo}
      />
      {props.todo.status === 'done' ? 'done!' : ''}
      <TodoDescription 
        todo={props.todo}
        toggleEditDescription={props.toggleEditDescription}
        editDescription={props.editDescription}
        updateTodo={props.updateTodo}
      />
      <TodoStatus 
        todo={props.todo}
        updateTodo={props.updateTodo}
      />

    </Paper>
  )
}

export default TodoView;