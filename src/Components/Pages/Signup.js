import React, { Component } from 'react'
import {Input, Row} from 'react-materialize';
import '../../../src/App.css';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    userName:'',
    password: ''
  }
  onChange = e => this.setState({[e.target.name]: e.target.value});
 
  render() {
    const { name, email, userName, password } = this.state; 
    return (
      <div>
        <div className="form-group">
        <h1>Signup!</h1>
        <Row className="sign-up">
        <Row>
          <Input s={6} label="Name" type="text" name="name" value= {name} onChange={this.onChange} validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="Email" type="email" name="email" value={email} onChange={this.onChange}  validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="User Name" type="text" name="userName" value={userName} onChange={this.onChange}  validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="Password" type="text" name="password" value={password} onChange={this.onChange}  validate defaultValue='' />
        </Row>
        <button className="btn waves-effect waves-light" type="submit" value="Add Contact">Submit
          <i className="material-icons right">send</i>
        </button>
        </Row>
        </div>
      </div>
    )
  }
}

export default Signup;