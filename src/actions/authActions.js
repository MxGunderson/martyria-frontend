import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const baseUrl = process.env.REACT_APP_BASE_URL;

// signup user
/**
 * 
 * @param {Posting User Data} userData 
 * @param {go to the appropriate response page} history 
 */
export const signupUser = (userData, history) => dispatch => {
  axios
    .post(`${baseUrl}/users/signup`, userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * 
 * @param {Grabbing User Data and setting token} userData 
 */
export const loginUser = userData => dispatch => {
  axios
    .post(`${baseUrl}/auth`, userData)
    .then(res => {
      // SAVE TO LOCAL STORAGE
      //const { token } = res.data
      const { token } = res.data; // = token
      // SET TOKEN TO LOCAL STORAGE
      localStorage.setItem("jwtToken", res.data);
      // SET TO AUTH HEADER
      setAuthToken(token);
      // DECODE TOKEN TO GET USER DATA
      const decoded = jwt_decode(res.data);
      // SET CURRENT USER
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    });
};


/**
 * 
 * @param {func to log in user} decoded 
 */
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

/**
 * @param {logging out user session} dispatch
 */
export const logoutUser = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  // set current use to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
