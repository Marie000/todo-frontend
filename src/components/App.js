import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './HomePage'

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
