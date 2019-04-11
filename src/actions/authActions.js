import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

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

// LOGIN USER GET USER TOKEN

export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login', userData)
  .then(res => {
    // SAVE TO LOCAL STORAGE
    const { token } = res.data
    // SET TOKEN TO LOCAL STORAGE
    localStorage.setItem('jwtToken', token);
    // SET TO AUTH HEADER
    setAuthToken(token);
    // DECODE TOKEN TO GET USER DATA
    const decoded = jwt_decode(token);
    // SET CURRENT USER
    dispatch(setCurrentUser(decoded));
  })
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
};

// set logged in user
export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// log user out
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem('jwtToken');
  //remove auth header for future requests
  setAuthToken(false);
  // set current use to {} wich will set isAuthenticated to false 
  dispatch(setCurrentUser({}));
}


