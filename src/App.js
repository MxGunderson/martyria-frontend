import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from'./Components/common/PrivateRoute';
import Landing from './Components/Pages/Landing';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateProfile from './Components/create-profile/CreateProfile';
import Profile from './Components/Profile/Profile';
import Posts from './Components/posts/Posts';
import Post from './Components/post/Post';
import EditProfile from './Components/edit-profile/EditProfile';

// import 'react-materialize';

import './App.css';



// Check for token
if (localStorage.jwt_decode) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded, localStorage.jwtToken));

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
            <Header className="header " />
            <div className="container">
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Landing} />
              <Route path='/about' component={About} />
              {/* <Route path='/home' component={Home} /> */}
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/profile' component={Profile} />
              

              <Switch>
                <PrivateRoute path='/dashboard' component={Dashboard} />
              </Switch>
              
              <Switch>
                {/* Private */}
                <PrivateRoute path='/create-profile' component={CreateProfile} />
              </Switch>
              {/* Private */}
              <Switch>
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              </Switch>

              <Switch>
                {/* Private */}
                <PrivateRoute path='/feed' component={Posts} />
              </Switch>
              {/* Private */}
              <Switch>
                <PrivateRoute exact path="/post" component={Post} />
              </Switch>

              <Footer className="landing" />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;