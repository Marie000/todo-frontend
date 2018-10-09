import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadTodos} from './actions/todoActions';
import './index.css';

const store = configureStore();

// Dispatch actions to load the initial state.
store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
