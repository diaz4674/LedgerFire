import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import BankData from "./BankData";

export default combineReducers({
  userReducer,
  BankData
});
