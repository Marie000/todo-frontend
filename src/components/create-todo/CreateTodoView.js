import React, { Component } from 'react';
import { TextField, MenuItem, SelectField, FlatButton } from 'material-ui';

class CreateTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: 'pending'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(type, event) {
    let change = {};
    change[type] = event.target.value;
    this.setState(change);
  } 

  handleStatus(event, index, value) {
    this.setState({status: value})
  }

  submit() {
    this.props.createTodo(this.state);
    this.setState({
      title: '',
      description: '',
      status: 'pending'
    })
  }

  render() {
    return (
      <div>
        <h3> Create a Todo: </h3>
        <form>
          <TextField hintText="title"
                      value={this.state.title}
                      onChange={this.handleChange.bind(this, 'title')}/>
          <br />
          <TextField hintText="Description"
                      value={this.state.description}
                      multiLine
                      rows={3}
                      onChange={this.handleChange.bind(this, 'description')}/>
          <br />
            <SelectField floatingLabelText="Status"
                          value={this.state.status}
                          onChange={this.handleStatus} >
            <MenuItem value="pending" primaryText="Pending" />
            <MenuItem value="in progress" primaryText="In Progress" />
            <MenuItem value="done" primaryText="done" />
            <MenuItem value="archived" primaryText="archived" />

            </SelectField>
            <br />
          <FlatButton onClick = {this.submit}>Submit</FlatButton>
        </form>
      </div>
    )
  }
}

export default CreateTodoView;