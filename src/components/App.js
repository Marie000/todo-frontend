import React from 'react';
import HomePage from './HomePage'
import { MuiThemeProvider } from 'material-ui/styles';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <HomePage />
      </MuiThemeProvider>
    );
  }
}

export default App;
