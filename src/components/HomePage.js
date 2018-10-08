import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list/TodoList';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Hello!</h1>
        <TodoList />
      </div>
    );
  }
}

export default HomePage;
