import { AUTHENTICATE_SUCCESS } from "./types";

export const isAuthenticated = isauth => dispatch => {
  dispatch({ type: AUTHENTICATE_SUCCESS, payload: isauth });
};
