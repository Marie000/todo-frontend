import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListView from './TodoListView';

class TodoListPage extends Component {
  constructor() {
    super();
    this.state = {
      displayArchived: false,
      orderType: 'createdAt'
    };
    this.toggleArchived = this.toggleArchived.bind(this);
    this.order = this.order.bind(this);
  }

  toggleArchived() {
    this.setState({displayArchived: !this.state.displayArchived});
  }

  order(type) {
    this.setState({orderType: type})
  }

  render() {
    if (this.props.todos) {
      return (
        <TodoListView
          todos={this.props.todos} 
          displayArchived={this.state.displayArchived}
          toggleArchived={this.toggleArchived}
          order={this.order}
          orderType={this.state.orderType}
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