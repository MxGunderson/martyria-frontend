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
import User from './Components/Profile/User';
import Posts from './Components/Profile/Posts';
import { Provider } from './Context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
         <div className="App">
           <Header />
           <div className="container">
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path='/About' component={About} /> />
               <Route path='/Home' component={Home} /> />
               <Route path='/Contact' component={Contact} />
               <Route path='/Login' component={Login} />
               <Route path='/Signup' component={Signup} />
               <Route path='/User' component={User} />
               <Route path='/Posts' component={Posts} />
             </Switch>
           </div>
        </div>
      </Router>
      </Provider>
    );
  }
}
//update

export default App;