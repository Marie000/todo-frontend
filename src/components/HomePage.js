import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list/TodoList';
import CreateTodo from './create-todo/CreateTodo';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Todo Application Prototype</h1>
        <CreateTodo />
        <TodoList />
      </div>
    );
  }
}

export default HomePage;
