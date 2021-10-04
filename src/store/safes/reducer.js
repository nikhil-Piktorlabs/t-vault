let idCount = 0;

const safeReducer = (state = [], action) => {
  switch (action.type) {
    case "addSafe": {
      idCount++;
      return [...state, { id: idCount, ...action.payload }];
    }
    case "deleteSafe":
      return state.filter((s) => s.id !== action.payload.id);
    default:
      return state;
  }
};

export default safeReducer;
