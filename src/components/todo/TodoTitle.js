import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

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
          <TextField hintText='title'
                     value={this.state.title}
                     onChange={this.handleChange}/>   
          <RaisedButton onClick={this.save} label='Save' />      
        </div>
      )
    } else {
      let status = this.props.todo.status;
      return (
        <div>
          <h2 className={'todo-title todo-title-' + this.props.todo.status}>
          {status === 'in progress' ? <i className='fas fa-spinner'></i> : null}
          {status === 'done' ? <i className='fas fa-check'></i> : null}
          {status === 'archived' ? <i className='fas fa-archive'></i> : null}
          {this.props.todo.title + ' '} 
          <span className='in-progress'>
          {status === 'in progress' ? 'in progress... ' : null}
          </span>
          <RaisedButton onClick={this.props.toggleEditTitle.bind(this)} label='Edit' />
          </h2>
        </div>
      )
    }

  }
}

export default TodoTitle;