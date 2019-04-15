import React, { Component } from 'react';
// import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4">Welcome To Martyria</h3>
                <p className="lead">
                  {' '}
                  Create a profile, share testimonies and connect with other Believers!
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}



export default Home