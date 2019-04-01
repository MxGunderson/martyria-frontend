import React, { Component } from 'react'
import 'react-materialize'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }


  //changes the state
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  //console logging to check if submit works
  //until we can get an api up and working
  handleSubmit = (e) => {
    e.prevetDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h4>Welcome back!</h4>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn blu lighten-1 z-depth-o'>Login</button>
          </div>
          <br />
          <button className='btn blu lighten-1 z-depth-o'>Forgot email or password? </button>
        </form>
      </div>
    )
  }
}

export default Login
