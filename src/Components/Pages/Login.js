import React, { Component } from 'react'
import { Redirect } from 'react-router';
import 'react-materialize'

class Login extends Component {
   constructor() {
     super();
     this.state = {
       email: '',
       password: '',
       errors: {}
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }


  //changes the state
  onChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  //console logging to check if submit works
  //until we can get an api up and working
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ fireRedirect: true })

    console.log(this.state);
  }

  validateForm() {
    return this.state.email && this.state.password;
  }

  render() {
    const { from } = this.props.location.state || '/User'
    const { fireRedirect } = this.state
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit} className='white'>
          <h4>Welcome back!</h4>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              onChange={this.onChange}
              value={this.state.email}
              />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              onChange={this.onChange}
              value={this.state.password}
              />
          </div>
          <div className='input-field'>

            {/* this make the 'Login' btn greyed out until all require info is entered */}
            <button className='btn blu lighten-1 z-depth-o' disabled={!this.validateForm()}>Login</button>
            {fireRedirect && (
              <Redirect to={from || '/User'} />
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
