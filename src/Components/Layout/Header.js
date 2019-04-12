import React, { Component }from 'react';
import {Navbar,NavItem,Icon} from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';


// This is a Header component for Navigation //

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }
  render(){
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
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Header);
