import React, { Component } from 'react';
import { FlatButton, TextField } from 'material-ui';

class TodoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.todo.title
    }
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  } 

  save() {
    this.props.updateTodo(this.props.todo._id, {title: this.state.title});
    this.props.toggleEditTitle();
  }

  render() {
    if (this.props.editTitle) {
      return (
        <div>
          <TextField hintText="title"
                     value={this.state.title}
                     onChange={this.handleChange}/>   
          <FlatButton onClick={this.save}>Save</FlatButton>       
        </div>
      )
    } else {
      return (
        <div>
          <h2 class={"todo-title-" + this.props.todo.status}>{this.props.todo.title}</h2>
          <FlatButton onClick={this.props.toggleEditTitle.bind(this)}>Edit</FlatButton>
        </div>
      )
    }

  }
}

export default TodoTitle;