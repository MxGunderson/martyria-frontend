import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-materialize';
import './App.css';
import Header from './Components/Header';
import TextBody from './Components/TextBody';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <TextBody />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
