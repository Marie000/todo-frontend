import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

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
      <div className="TodoStatus">
        {currentStatus === 'pending' ? <RaisedButton onClick={this.startProgress} label="Start Progress" /> : null}
        {currentStatus === 'pending' || currentStatus === 'in progress'
          ? <RaisedButton onClick={this.markAsDone} label="Mark as done" /> : null}
        {currentStatus !== 'archived' ? <RaisedButton onClick={this.archive} label="Archive" /> : null}
      </div>
    )

  }
}

export default TodoDescription;