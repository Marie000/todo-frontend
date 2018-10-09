import React, { Component } from 'react';
import { FlatButton, TextField } from 'material-ui';

class TodoDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.todo.description
    }
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    this.setState({description: event.target.value});
  } 

  save() {
    this.props.updateTodo(this.props.todo._id, {description: this.state.description});
    this.props.toggleEditDescription();
  }

  render() {
    if (this.props.editDescription) {
      return (
        <div>
          <TextField hintText="Description"
                      value={this.state.description}
                      multiLine
                      rows={3}
                      onChange={this.handleChange}/> 
          <FlatButton onClick={this.save}>Save</FlatButton>       
        </div>
      )
    } else {
      return (
        <div>
          <p>{this.props.todo.description}</p>
          <FlatButton onClick={this.props.toggleEditDescription.bind(this)}>Edit</FlatButton>
        </div>
      )
    }

  }
}

export default TodoDescription;