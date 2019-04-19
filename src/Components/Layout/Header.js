
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logoutUser } from '../../actions/authActions';
// import { clearCurrentProfile } from '../../actions/profileActions';

// class Header extends Component {
//   onLogoutClick(e) {
//     e.preventDefault();
//     this.props.clearCurrentProfile();
//     this.props.logoutUser();
//   }

//   render() {
//     const { isAuthenticated, user } = this.props.auth;

//     const authLinks = (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/feed">
//             Post Feed
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/dashboard">
//             Dashboard
//           </Link>
//         </li>
//         <li className="nav-item">
//           <a href="/landing"
//             onClick={this.onLogoutClick.bind(this)}
//             className="nav-link"
//           >
//             <img
//               className="rounded-circle"
//               src={user.avatar}
//               alt={user.name}
//               style={{ width: '25px', marginRight: '5px' }}
//               title=""
//             />{' '}
//             Logout
//           </a>
//         </li>
//       </ul>
//     );

//     const guestLinks = (
//       <div>
//       <ul className="navbar-nav ml-auto">
//          <li className="nav-item">
//           <Link className="nav-link" to="/home">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">
//             About
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">
//             Contact
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signup">
//             Sign Up
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">
//             Login
//           </Link>
//         </li>
//       </ul>
//       </div>
//     );

//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/home">
//             Martria
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#mobile-nav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           <div className="collapse navbar-collapse" id="mobile-nav">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
            
//               </li>
//             </ul>
//             {isAuthenticated ? authLinks : guestLinks}
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// Header.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
//   Header
// );







// //
// //
// //

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
      <div className="container-header">
        <div className="header">
          <NavItem href='/feed'>Post Feed</NavItem>
          <NavItem href='/dashboard'>Back To Dashboard</NavItem>
          {/* <NavItem href='/home'>Home</NavItem>
          <NavItem href='/about'>About</NavItem> */}
          <NavItem href='/contact'>Contact</NavItem>
          <NavItem className="logout" href='#' onClick={this.onLogoutClick.bind(this)}>Logout</NavItem>
          <NavItem href='/'><Icon>refresh</Icon></NavItem>

        </div>
      </div>
    );

    const guestLinks = (
      <div>
        <div className="header">
          {/* <NavItem href='/'><Icon>search</Icon></NavItem> */}
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
          <NavItem href='/home'>Home</NavItem>
          <NavItem href='/login'>Login</NavItem>
          <NavItem href='/signup'>Signup</NavItem>
          <NavItem href='/feed'><Icon>refresh</Icon></NavItem>
        </div>
      </div>
    );


    return (
      <div>
      
            <Navbar brand='Martyria' right>
              {isAuthenticated ? authLinks : guestLinks}
            </Navbar>
        
      </div>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Header);
