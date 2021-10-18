import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import safeReducer from "./safes";
import api from "./middleware/api";

const allReducers = combineReducers({ safes: safeReducer });

export default configureStore({ reducer: allReducers, middleware: [api] });
