import { TEST_DISPATCH } from '../actions/types'

const initialstate = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialstate, action) {
  switch(action.type) {
    case TEST_DISPATCH:
    return {
      ...state,
      user: action.payload
    }
    default:
    return state;
  }
}