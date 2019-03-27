import React, { Component } from 'react'
import {Input, Row} from 'react-materialize';
import '../../../src/App.css';

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Signup!</h1>
        <Row className="sign-up">
        <Row>
          <Input s={6} label="First Name" validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="Last Name" validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="Email" validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="User Name" validate defaultValue='' />
        </Row>
        <Row>
          <Input s={6} label="Password" validate defaultValue='' />
        </Row>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
        </Row>

      </div>
    )
  }
}

export default Signup;