import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';

class TodoDateDue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDue: this.props.todo.dateDue
    }
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleChange(event) {
    this.setState({dateDue: event.target.value});
  } 

  save() {
    this.props.updateTodo(this.props.todo._id, {dateDue: this.state.dateDue});
    this.props.toggleEditDateDue();
  }

  render() {
    if (this.props.editDateDue) {
      return (
        <div>
          <TextField type='Date'
                  value={this.state.dateDue}
                  onChange={this.handleChange} />
          <RaisedButton onClick={this.save} label='Save' />      
        </div>
      )
    } else {
      let date = new Date(this.props.todo.dateDue);
      // NOTE: this is a quick fix to deal with an inconsistency with the setting and displaying
      // of dates. Without it, the date changes when we hit click.
      // TODO: find a better fix
      date.setDate(date.getDate() + 1);

      return (
        <div>
          { this.props.todo.dateDue ? 
            <p><strong>Date Due:</strong> {date.toDateString()}</p> :
            'Due date not set'
          }
          <RaisedButton onClick={this.props.toggleEditDateDue.bind(this)} label='Edit Due Date' />
        </div>
      )
    }

  }
}

export default TodoDateDue;