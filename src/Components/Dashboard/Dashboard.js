import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {

    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    // console.log('USER', user);
    let dashboardContent;
    if (profile === null || loading || !user) {
      dashboardContent = <Spinner />
    } else {
      dashboardContent = (
        <div>

          <p className='lead text-muted'>Welcome <Link to={`/profile/_id/${profile.name}`}> {user.name} </Link></p>
          <p>You have not yet setup a profile, please add some info</p>
          <ProfileActions />
          <br />
          <Link to='/create-profile' style={{backgroundColor: 'black'}} className='waves-effect waves-light btn'>Create Profile</Link>
        </div>
      );
    }
    // //check if logged in user has profile data
    // if (Object.keys(profile).length > 0) {
    //   console.log('im here');
    //   dashboardContent = (
    //     <div>
    //       <p className='lead text-muted'>
    //         Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
    //       </p>
    //       {/* <div style={{ marginBottom: '60px' }} />
    //       <button onClick={this.onDeleteClickbind(this)} className='btn btn-danger'>Delete my account</button>
    //       profileActions is supposed to go here */}
    //     </div>
    //   )
    // } else {
    //   console.log('kidding im here');

    //   //User is logged in but has no profile

    // }
    //}

    return (
      <div className='dashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4'>Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);