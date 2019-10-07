import { AUTHENTICATE_SUCCESS, SEND_USERDATA_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  userName: "",
  email: "",
  password: "",
  isAuth: "",
  user: []
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return { ...state, isAuth: action.payload };
    case SEND_USERDATA_SUCCESS:
      return { ...state, user: action.payload };
    // case PASSWORD_CHANGED:
    //     return {...state, password: action.payload}
    // case LOGIN_USER:
    //     return {...state, loading: true}
    // case LOGIN_USER_SUCCESS:
    //     return {...state, ...INITIAL_STATE, user: action.payload}
    // case LOGIN_USER_FAIL:
    //     return {...state, error: 'Authentication Failed.', loading: false}
    default:
      return state;
  }
}
