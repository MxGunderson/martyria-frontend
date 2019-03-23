import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App component</h1>
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
      </div>
    );
  }
}

export default App;
