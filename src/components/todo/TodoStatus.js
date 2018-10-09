import React, { Component } from 'react';
import { FlatButton, TextField } from 'material-ui';

class TodoDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title
    }
    this.markAsDone = this.markAsDone.bind(this);
    this.startProgress = this.startProgress.bind(this);
    this.archive = this.archive.bind(this);
  }

  markAsDone() {
    this.props.updateTodo(this.props.todo._id, {status: 'done'});
  }

  startProgress() {
    this.props.updateTodo(this.props.todo._id, {status: 'in progress'});
  }

  archive() {
    this.props.updateTodo(this.props.todo._id, {status: 'archived'})
  }

  render() {
    let currentStatus = this.props.todo.status;
    return (
      <div>
        {currentStatus !== 'done' ? <FlatButton onClick={this.markAsDone}>Mark as done</FlatButton> : null}
        {currentStatus !== 'in progress' ? <FlatButton onClick={this.startProgress}>Start Progress</FlatButton>: null}
        {currentStatus !== 'archived' ? <FlatButton onClick={this.archive}>Archive</FlatButton> : null}
      </div>
    )

  }
}

export default TodoDescription;