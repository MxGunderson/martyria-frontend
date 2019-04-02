import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: 'Cam',
        lastName: 'LaVallie',
        email: 'cam@test.com',
        password: 'test123'
      },
      {
        id: 1,
        firstName: 'Matt',
        lastName: 'Gunderson',
        email: 'matt@test.com',
        password: 'test1234'
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;