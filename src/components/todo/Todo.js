import React, {Component} from 'react';
import TodoView from './TodoView';

class Todo extends Component {

  render() {
    return (
      <TodoView todo={this.props.todo} />
    )
  }
}

export default Todo;