import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./middleware/api";

const slice = createSlice({
  name: "safes",
  initialState: [],
  reducers: {
    safesRecieved: (safes, action) =>
      action.payload.map((safe, index) =>
        index === 0 ? { ...safe, selected: true } : safe
      ),

    safeAdded: (safes, action) => [
      ...safes.map((safe) => {
        return { ...safe, selected: false };
      }),
      { ...action.payload, updated: new Date(), selected: true },
    ],

    safeDeleted: (safes, action) => {
      let newSafes = safes.filter((safe) => safe._id !== action.payload._id);
      return newSafes.map((safe, index) =>
        index === 0 ? { ...safe, selected: true } : safe
      );
    },

    safeUpdated: (safes, action) =>
      safes.map((safe) =>
        safe._id === action.payload._id
          ? { ...action.payload, selected: true }
          : safe
      ),

    safeSelected: (safes, action) =>
      safes.map((s) =>
        s._id === action.payload
          ? { ...s, selected: true }
          : { ...s, selected: false }
      ),
  },
});

export const { safesRecieved, safeAdded, safeSelected } = slice.actions;

export const loadSafes = () =>
  apiCallBegan({
    url: "/safes",
    onSuccess: safesRecieved.type,
  });

export default slice.reducer;
