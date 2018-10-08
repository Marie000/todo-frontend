import React from 'react';

const TodoView = (props) => {
  return (
    <div>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.description}</p>
    </div>
  )
}

export default TodoView;