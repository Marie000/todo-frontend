import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListView from './TodoListView';

class TodoListPage extends Component {

  render() {
    if (this.props.todos) {
      return (
        <TodoListView todos={this.props.todos} />
      )
    } else {
      return <div>loading...</div>
    }

  }

}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps
)(TodoListPage);