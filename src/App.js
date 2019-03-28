import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-materialize';
import './App.css';
import Header from './Components/Header';
<<<<<<< HEAD
import Home from './Components/Pages/Home';
=======
import TextBody from './Components/TextBody';
import Footer from './Components/Footer';
>>>>>>> f629f815bb0f9b013fb0bf50a9641f60f789a155

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