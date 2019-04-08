import { GET_ERRORS } from "./types";
import axios from 'axios';
// signup user

export const signupUser = (userData, history) => dispatch => {
  axios.post('/api/users/signup', userData)
  .then(res => history.push('/login'))
  .catch(err => 
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
};


