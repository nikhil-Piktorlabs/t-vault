import { createStore, combineReducers } from "redux";
import safeReducer from "./safes/reducer";

const allReducers = combineReducers({ safes: safeReducer });

export default createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
