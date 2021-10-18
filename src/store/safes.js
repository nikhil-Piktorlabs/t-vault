import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./middleware/api";

const slice = createSlice({
  name: "safes",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setSafeLoad: (safes, action) => {
      safes.loading = !safes.loading;
    },

    safesRecieved: (safes, action) => {
      safes.list = action.payload;
      safes.list = safes.list.map((safe, index) =>
        index === 0 ? { ...safe, selected: true } : safe
      );
    },

    safeAdded: (safes, action) => {
      safes.list = safes.list.map((safe) => {
        return { ...safe, selected: false };
      });
      safes.list.push({
        ...action.payload,
        selected: true,
      });
    },

    safeDeleted: (safes, action) => {
      safes.list = safes.list.filter((safe) => safe._id !== action.payload._id);
      safes.list = safes.list.map((safe, index) =>
        index === 0 ? { ...safe, selected: true } : safe
      );
    },

    safeUpdated: (safes, action) => {
      safes.list = safes.list.map((safe) =>
        safe._id === action.payload._id
          ? { ...action.payload, selected: true }
          : safe
      );
    },

    safeSelected: (safes, action) => {
      safes.list = safes.list.map((s) =>
        s._id === action.payload
          ? { ...s, selected: true }
          : { ...s, selected: false }
      );
    },
  },
});

export const { safesRecieved, safeAdded, safeSelected } = slice.actions;

export const loadSafes = () =>
  apiCallBegan({
    url: "/safes",
    onSuccess: safesRecieved.type,
  });

export default slice.reducer;
