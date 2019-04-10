import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'react-materialize';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import User from './Components/Profile/User';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router>
        <div className="App">
          <Header className="header"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/about' component={About} /> 
              <Route path='/home' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/user' component={User} />
            </Switch>
          <Footer className="footer" />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;