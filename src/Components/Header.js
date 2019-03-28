import React from 'react'
import { Route } from 'react-router-dom';
import {Navbar,NavItem,Icon} from 'react-materialize';
import '../App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// This is a Header component for Navigation //

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <Navbar brand='Martyria' right>
              <NavItem href='/'><Icon>search</Icon></NavItem>
              <NavItem href='/Home'>Home</NavItem>
              <NavItem href='/About'>About</NavItem>
              <NavItem href='/Contact'>Contact</NavItem>
              <NavItem href='/Login'>Login</NavItem>
              <NavItem href='/Signup'>Signup</NavItem>
              <NavItem href='/'><Icon>refresh</Icon></NavItem>
          </Navbar>
        </div>  
      <Route path='/Home' render={() => <Home />} />
      <Route path='/About' render={() => <About />} />
      <Route path='/Contact' render={() => <Contact />} />
      <Route path='/Login' render={() => <Login />} />
      <Route path='/Signup' render={() => <Signup />} />
      </div>
    </div>
  )
}

export default Header;
