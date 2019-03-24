import React, { Component } from 'react';
import 'react-materialize';
import './App.css';
import Header from './Components/Header';
import TextBody from './Components/TextBody';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextBody />
        <Footer />
      </div>
    );
  }
}

export default App;
