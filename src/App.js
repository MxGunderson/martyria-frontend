import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import User from './Components/Profile/User';
import Dashboard from './Components/Dashboard/Dashboard';
import 'react-materialize';
import './App.css';
import { clearCurrentProfile } from './actions/profileActions';

// Check for token
if (localStorage.jwt_decode) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token - which is set on the backend - check to see if that has been implemented
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser)
    //TODO: Clear current profile
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header className="header" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/user' component={User} />
                 <Route path='/dashboard' component={Dashboard} />
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