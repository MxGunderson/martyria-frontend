import React from 'react'
import {Navbar,NavItem,Icon} from 'react-materialize';
import '../App.css';

// This is a Header component for Navigation //

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <Navbar brand='Martyria' right>
              <NavItem href='/'><Icon>search</Icon></NavItem>
              <NavItem href='/'>About</NavItem>
              <NavItem href='/'>Contact</NavItem>
              <NavItem href='/'>Login</NavItem>
              <NavItem href='/'>Signup</NavItem>
              <NavItem href='/'><Icon>refresh</Icon></NavItem>
          </Navbar>
        </div>  
      </div>
    </div>
  )
}

export default Header;