import React, { Component } from 'react';
import CreateTodoView from './CreateTodoView';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CreateTodoView 
        createTodo={this.props.createTodo}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: (todo) => {
      dispatch(todoActions.createTodo(todo));
    }
  };
}


export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);