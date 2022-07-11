import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginState from "./reducers/loginState";
import targetCity from "./reducers/targetCity";

export default createStore(
  combineReducers({ loginState, targetCity }),
  applyMiddleware(thunk)
);
