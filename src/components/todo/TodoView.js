import React from 'react';
import { Card } from 'material-ui';
import TodoTitle from './TodoTitle';
import TodoDescription from './TodoDescription';
import TodoStatus from './TodoStatus';
import TodoDateDue from './TodoDateDue';

const TodoView = (props) => {
  return (
    <Card>
      <div className='TodoView'>
      <TodoTitle 
        todo={props.todo} 
        toggleEditTitle={props.toggleEditTitle}
        editTitle={props.editTitle}
        updateTodo={props.updateTodo}
      />
      <TodoDateDue 
        todo={props.todo}
        toggleEditDateDue={props.toggleEditDateDue}
        editDateDue={props.editDateDue}
        updateTodo={props.updateTodo}
      />
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
      </div>

    </Card>
  )
}

export default TodoView;