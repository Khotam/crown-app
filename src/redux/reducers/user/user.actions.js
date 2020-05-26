import userActionTypes from "./user.types";

export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const setCurrentUserSignInError = (error) => {
  return {
    type: userActionTypes.SET_CURRENT_USER_SIGN_IN_ERROR,
    payload: error,
  };
};

export const setCurrentUserSignUpError = (error) => {
  return {
    type: userActionTypes.SET_CURRENT_USER_SIGN_UP_ERROR,
    payload: error,
  };
};
