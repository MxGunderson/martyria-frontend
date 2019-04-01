import React, { Component } from 'react';
import { Redirect } from 'react-router';
import 'react-materialize';


class Signup extends Component {
 state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
        this.setState({ fireRedirect: true })

    console.log(this.state);
  }

   validateForm() {
     return this.state.email.length > 0 && this.state.password.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0;
   }
  
  render() {
    const { from } = this.props.location.state || '/Login'
    const { fireRedirect } = this.state
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text-darken-3">Signup!</h5>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn blu lighten-1 z-depth-0 " disabled={!this.validateForm()}>Signup! </button>
              {fireRedirect && (
          <Redirect to={from || '/Login'}/>
        )}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;