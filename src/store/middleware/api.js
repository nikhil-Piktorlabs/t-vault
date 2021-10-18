import { createAction } from "@reduxjs/toolkit";
import http from "../../services/httpService";

export const apiCallBegan = createAction("api/callBegan");

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    next(action);

    const { url, method, data, onSuccess } = action.payload;

    try {
      const response = await http.request({
        baseURL: "https://t-vault--backend-nikhil.herokuapp.com/api",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

export default api;