export const safeAdded = (details) => {
  return {
    type: "addSafe",
    payload: details,
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
