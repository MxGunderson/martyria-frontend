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
              <NavItem href='/Home'>Home</NavItem>
              <NavItem href='/About'>About</NavItem>
              <NavItem href='/Contact'>Contact</NavItem>
              <NavItem href='/Login'>Login</NavItem>
              <NavItem href='/Signup'>Signup</NavItem>
              <NavItem href='/'><Icon>refresh</Icon></NavItem>
          </Navbar>
        </div>  
      
      </div>
    </div>
  )
}

export default Header;
