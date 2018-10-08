import React, {Component} from 'react';
import TodoView from './TodoView';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: false
    }
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
  }

  toggleEditTitle() {
    console.log('toggle')
    this.setState({editTitle: !this.state.editTitle});
  }

  render() {
    return (
      <TodoView 
        todo={this.props.todo}
        updateTodo={this.props.updateTodo}
        toggleEditTitle={this.toggleEditTitle}
        editTitle={this.state.editTitle}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTodo: (id, change) => {
      dispatch(todoActions.updateTodo(id, change));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Todo);