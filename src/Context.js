import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    users: [  
    {
      firstName: 'Cam',
      id: 1,
      email: 'test@test.com',
      lastName: 'Lava',
      password: 'test123'
    }
  ]
}

render() {
  return(
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  )
}
}

export const Consumer = Context.Consumer;