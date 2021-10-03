import { combineReducers } from "redux";

const ADD_SAFE = "addSafe";
const DELETE_SAFE = "deleteSafe";

let idCount = 0;

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
    case ADD_SAFE: {
      idCount++;
      return [...state, { id: idCount, ...action.payload }];
    }
    case DELETE_SAFE:
      return state.filter((s) => s.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({ safes: safeReducer });
