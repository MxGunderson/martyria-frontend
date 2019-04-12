import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import TextFieldGroup from '../Common/TextFieldGroup';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.signupUser(newUser, this.props.history);
      this.setState({ fireRedirect: true })
  }

  render() {
    const { errors } = this.state;
    const { from } = this.props.location.state || '/Login'
    const { fireRedirect } = this.state

    return (
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
              <h1 className="display-4 text-center">Sign Up</h1>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info=""
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
                {fireRedirect && (
          <Redirect to={from || '/Login'}/>
        )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signupUser })(withRouter(Signup));



// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { Redirect } from 'react-router';
// import 'react-materialize';
// import { connect } from 'react-redux';
// import { signupUser } from '../../actions/authActions'
// // import classnames from 'classnames';


// class Signup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       errors: {}
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
  
//   componentWillReceiveProps(nextProps) {  
//     if(nextProps.errors){
//       this.setState({errors: nextProps.errors});
//     }
//   }
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
  
//   onSubmit = (e) => {
//     e.preventDefault();
    
//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.signupUser(newUser, this.props.history);
//     this.setState({ fireRedirect: true })
//     console.log(this.state)
    
//   }
  
//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0;
//   }
  
//   render() {
//     const { errors } = this.state;
//     const { from } = this.props.location.state || '/Login'
//     const { fireRedirect } = this.state
//     return (
//       <div>
//         <div className="container">
//           <form onSubmit={this.onSubmit} className="white">
//             <h5 className="grey-text-darken-3">Signup!</h5>
//               <div className="input-field">
//                 <label htmlFor="name">Name</label>
//                   <input 
//                    type="text" 
//                   //  className={classnames('form-control from-control-lg', {'is-invalid': errors.name})}
//                    name="name" 
//                    onChange={this.onChange}
//                    value= {this.state.name}
//                    error={errors.name}
//                   />
//             </div>
//             <div className="input-field">
//               <label htmlFor="email">Email</label>
//                 <input 
//                   type="email" 
//                   name="email" 
//                   onChange={this.onChange}
//                   value= {this.state.email}
//                   error={errors.email}
//                 />
//             </div>
//             <div className="input-field">
//               <label htmlFor="password">Password</label>
//                 <input 
//                   type="password" 
//                   name="password" 
//                   onChange={this.onChange}
//                   value= {this.state.password}
//                   error={errors.password}
//                   />
//             </div>
//             <div className="input-field">
//               <button className="btn blu lighten-1 z-depth-0 " disabled={!this.validateForm()}>Signup! </button>
//               {fireRedirect && (
//           <Redirect to={from || '/Login'}/>
//         )}
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// Signup.propTypes = {
//   signupUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors
// })

// export default connect(mapStateToProps, {signupUser}) (withRouter(Signup));