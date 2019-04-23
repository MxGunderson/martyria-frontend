import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4" style={{color: '#EFEDE1'}}>Welcome To Martyria</h3>
                <p className="lead" style={{color: '#EFEDE1'}}>
                  {' '}
                  Signup to share testimonies
                  and be encouraged in the goodness of God!
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2" style={{background: '#EFEDE1', color: 'black'}}>
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light" style={{background: '#EFEDE1', color: 'black'}}>
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


export default Landing;