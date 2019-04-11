import React, { Component } from 'react'
import { Redirect } from 'react-router';
import 'react-materialize'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { signupUser } from '../../actions/authActions';
 
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
   
   componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.propst.history.push('/user')
    } 
    if(nextProps.errors) {
       this.setState({errors: nextProps.errors});
     }
   } 

  //changes the state
  onChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  //console logging to check if submit works
  //until we can get an api up and working
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ fireRedirect: true })
    this.props.signupUser(userData);

    console.log(this.state);
  }

  validateForm() {
    return this.state.email && this.state.password;
  }


  render() {
    const { from } = this.props.location.state || '/User'
    const { fireRedirect } = this.state
    const { errors } = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit} className='white'>
          <h4>Welcome back!</h4>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className={classnames('form-control from-control-lg', {'is-invalid': errors.email})}
              id="email" 
              onChange={this.onChange}
              value={this.state.email}
              />
              {errors.name && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              className={classnames('form-control from-control-lg', {'is-invalid': errors.password})} 
              id="password" 
              onChange={this.onChange}
              value={this.state.password}
              />
              {errors.name && (<div className="invalid-feedback">{errors.password}</div>)}
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

Login.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const matStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(matStateToProps, {signupUser})(Login);
