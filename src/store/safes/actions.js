export const safeAdded = (safe) => {
  return {
    type: "addSafe",
    payload: safe,
  };
};

export const safeDeleted = (id) => {
  return {
    type: "deleteSafe",
    payload: {
      id,
    },
  };
};

export const safeSelected = (id) => {
  return {
    type: "selectSafe",
    payload: {
      id,
    },
  };
};

export const safeUpdated = (safe) => {
  return {
    type: "updateSafe",
    payload: safe,
  };
};
