import userActionTypes from "./user.types";

const initialState = {
  currentUser: null,
  signInError: null,
  signUpError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload, error: null };
    case userActionTypes.SET_CURRENT_USER_SIGN_IN_ERROR:
      return { ...state, signInError: action.payload };
    case userActionTypes.SET_CURRENT_USER_SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    default:
      return state;
  }
};

export default userReducer;
