import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListView from './TodoListView';

class TodoListPage extends Component {
  constructor() {
    super();
    this.state = {
      displayArchived: false
    };
    this.toggleArchived = this.toggleArchived.bind(this);
  }

  toggleArchived() {
    this.setState({displayArchived: !this.state.displayArchived});
  }

  render() {
    if (this.props.todos) {
      return (
        <TodoListView
          todos={this.props.todos} 
          displayArchived={this.state.displayArchived}
          toggleArchived={this.toggleArchived}
        />
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