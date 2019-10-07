import { AUTHENTICATE_SUCCESS, SEND_USERDATA_SUCCESS } from "./types";

export const isAuthenticated = isauth => dispatch => {
  dispatch({ type: AUTHENTICATE_SUCCESS, payload: isauth });
};

export const sendUserData = userData => dispatch => {
  dispatch({ type: SEND_USERDATA_SUCCESS, payload: userData });
};
