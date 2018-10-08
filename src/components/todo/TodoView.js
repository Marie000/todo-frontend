import React from 'react';
import { Paper, FlatButton, TextField } from 'material-ui';
import TodoTitle from './TodoTitle';

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
      <p>{props.todo.description}</p>
      <FlatButton onClick={props.updateTodo.bind(this, props.todo._id, {status: 'done'})}>
        Mark as done
      </FlatButton>
    </Paper>
  )
}

export default TodoView;