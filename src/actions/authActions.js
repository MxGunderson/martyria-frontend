import { TEST_DISPATCH } from "./types";

// signup user

export const signupUser =(userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};