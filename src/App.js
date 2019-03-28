import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-materialize';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
//update

export default App;