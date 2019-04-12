// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logoutUser } from '../../actions/authActions';
// // import { clearCurrentProfile } from '../../actions/profileActions';

// class Header extends Component {
//   onLogoutClick(e) {
//     e.preventDefault();
//     // this.props.clearCurrentProfile();
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
//           <a
//             href="/#"
//             onClick={this.onLogoutClick.bind(this)}
//             className="nav-link"
//           >
//             <img
//               className="rounded-circle"
//               src={user.avatar}
//               alt={user.name}
//               style={{ width: '25px', marginRight: '5px' }}
//               title="You must have a Gravatar connected to your email to display an image"
//             />{' '}
//             Logout
//           </a>
//         </li>
//       </ul>
//     );

//     const guestLinks = (
//       <ul className="navbar-nav ml-auto">
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
//       </ul>
//     );

//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Martyria
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
//                 <Link className="nav-link" to="/profiles">
//                   {' '}
//                   Connect
//                 </Link>
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

// export default connect(mapStateToProps, { logoutUser})(
//   Header
// );




import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';



// This is a Header component for Navigation //

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="container">
        <div className="header">
          <NavItem href='#' onClick={this.onLogoutClick.bind(this)} className='nav-link'>Logout</NavItem>
          <img src={user.avatar} alt={user.name} title='upload an image!' />
          <NavItem href='/'><Icon>search</Icon></NavItem>
          <NavItem href='/'>About</NavItem>
          <NavItem href='/'>Contact</NavItem>
          <NavItem href='/'><Icon>refresh</Icon></NavItem>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="container">
        <div className="header">
          <NavItem href='/'><Icon>search</Icon></NavItem>
          <NavItem href='/'>About</NavItem>
          <NavItem href='/'>Contact</NavItem>
          <NavItem href='/'>Login</NavItem>
          <NavItem href='/'>Signup</NavItem>
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

export default connect(mapStateToProps, { logoutUser })(Header);
