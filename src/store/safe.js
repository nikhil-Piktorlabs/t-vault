import { combineReducers } from "redux";

const ADD_SAFE = "addSafe";
const DELETE_SAFE = "deleteSafe";

export const safeAdded = (details) => {
  return {
    type: ADD_SAFE,
    payload: details,
  };
};

export const safeDeleted = (id) => {
  return {
    type: DELETE_SAFE,
    payload: {
      id,
    },
  };
};

const safeReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SAFE:
      return [...state, action.payload];
    case DELETE_SAFE:
      return state.filter((s) => s.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({ safes: safeReducer });
