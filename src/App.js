import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-materialize';
import './App.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
