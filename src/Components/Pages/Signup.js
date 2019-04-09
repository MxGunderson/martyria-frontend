import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import 'react-materialize';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions'


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {  
    if(nextProps.errors){
      this.setState({errors: nextProps.errors});
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    // this.props.signupUser(newUser, this.props.history());
    this.props.signupUser(newUser);
    this.setState({ fireRedirect: true })
    
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0;
  }
  
  render() {
    const { errors } = this.state;
    const { from } = this.props.location.state || '/Login'
    const { fireRedirect } = this.state
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit} className="white">
            <h5 className="grey-text-darken-3">Signup!</h5>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                  <input 
                   type="text" 
                   name="name" 
                   onChange={this.onChange}
                   value= {this.state.name}
                  />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  onChange={this.onChange}
                  value= {this.state.email}
                />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  onChange={this.onChange}
                  value= {this.state.password}
                  />
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

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {signupUser}) (withRouter(Signup));