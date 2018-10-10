import React, { Component } from 'react';
import { TextField, RaisedButton, Card, CardTitle, CardText } from 'material-ui';

class CreateTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: 'pending',
      dateDue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(type, event) {
    let change = {};
    change[type] = event.target.value;
    this.setState(change);
  } 

  submit() {
    this.props.createTodo(this.state);
    this.setState({
      title: '',
      description: '',
      status: 'pending',
      dateDue: ''
    })
  }

  render() {
    return (
      <div>
        <Card expandable>
        <CardTitle title='Create a Todo'
                   actAsExpander
                   showExpandableButton />
        
        <CardText expandable={true}>
        <form>
          <TextField hintText='title'
                      fullWidth
                      value={this.state.title}
                      onChange={this.handleChange.bind(this, 'title')}/>
          <br />
          <TextField hintText='Description'
                      fullWidth
                      value={this.state.description}
                      multiLine
                      rows={3}
                      onChange={this.handleChange.bind(this, 'description')}/>
          <br />
          Due Date: 
          <TextField type='Date'
                  value={this.state.dateDue}
                  onChange={this.handleChange.bind(this, 'dateDue')} />

            <br />
          <RaisedButton onClick = {this.submit} label='Submit' className='button' />
        </form>
        </CardText>
        </Card>
      </div>
    )
  }
}

export default CreateTodoView;