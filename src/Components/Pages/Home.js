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
                  We are glad you are here!
                </p>
                <p className="lead">
                  {' '}
                  Join us in spreading the good news of Christ!
                </p>
                <p className="lead">
                  {' '}
                  Share a testimony and encourage others! Below are a few testimonies we wanted to share!
                </p>
                <hr />
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