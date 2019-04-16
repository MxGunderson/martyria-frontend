import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
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
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="container">
        <div className="header">
          <NavItem href='#' onClick={this.onLogoutClick.bind(this)} className='nav-link'>Logout</NavItem>
          <img src={user.avatar} alt={user.name} title='upload an image!' />
          <NavItem href='/'><Icon>search</Icon></NavItem>
          <NavItem href='/feed'>Post Feed</NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
          <NavItem href='/'><Icon>refresh</Icon></NavItem>
          
        </div>
      </div>
    );

    const guestLinks = (
      <div className="container">
        <div className="header">
          <NavItem href='/'><Icon>search</Icon></NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
          <NavItem href='/login'>Login</NavItem>
          <NavItem href='/signup'>Signup</NavItem>
          <NavItem href='/'><Icon>refresh</Icon></NavItem>
        </div>
      </div>
    );


    return (
      <div>
        <div className="container">
          <div className="header">
            <Navbar brand='Martyria' right>
              {isAuthenticated ? authLinks : guestLinks}
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

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Header);
