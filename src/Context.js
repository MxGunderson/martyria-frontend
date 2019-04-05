import React, { Component } from 'react';


const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => 
        post.id !== action.payload)
      };
      case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload, 
        ...state.posts]
      };
      default:
      return state;
  }
}

export class Provider extends Component {


constructor() {
  super();
  this.state = {
    posts: [{
        id: 1,
        title: 'Healed From Learning Disability',
        body: 'I retain information now',
        author: 'Cameron',
      },
      {
        id: 2,
        title: 'My Hip Was Healed',
        body: 'I can walk normal again',
        author: 'Susan',
      },
      {
        id: 3,
        title: 'My Brain Was Healed',
        body: 'I can read and retain',
        author: 'Reece',
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
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