import React from 'react'
import {Navbar,NavItem,Icon} from 'react-materialize';

// This is a Header component for Navigation //

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <Navbar brand='Martyria' right>
              <NavItem href='/'><Icon>search</Icon></NavItem>
              <NavItem href='/home'>Home</NavItem>
              <NavItem href='/about'>About</NavItem>
              <NavItem href='/contact'>Contact</NavItem>
              <NavItem href='/login'>Login</NavItem>
              <NavItem href='/signup'>Signup</NavItem>
              <NavItem href='/'><Icon>refresh</Icon></NavItem>
          </Navbar>
        </div>  
      
      </div>
    </div>
  )
}

export default Header;
