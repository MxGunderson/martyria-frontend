import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-materialize';
import './App.css';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/About' component={About}/> />
          <Route path='/Home' component={Home} /> />
          <Route path='/Contact' component={Contact} />
          <Route path='/Login' component={Login} />
          <Route path='/Signup' component={Signup} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
//update

export default App;