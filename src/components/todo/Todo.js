import React, {Component} from 'react';
import TodoView from './TodoView';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: false,
      editDescription: false
    }
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.toggleEditDescription = this.toggleEditDescription.bind(this);
  }

  toggleEditTitle() {
    this.setState({editTitle: !this.state.editTitle});
  }

  toggleEditDescription() {
    this.setState({editDescription: !this.state.editDescription});
  }

  render() {
    return (
      <TodoView 
        todo={this.props.todo}
        updateTodo={this.props.updateTodo}
        toggleEditTitle={this.toggleEditTitle}
        editTitle={this.state.editTitle}
        toggleEditDescription={this.toggleEditDescription}
        editDescription={this.state.editDescription}
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