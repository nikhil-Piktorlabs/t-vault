let idCount = 0;

const safeReducer = (state = [], action) => {
  switch (action.type) {
    case "addSafe":
      idCount++;
      return [
        ...state.map((s) => {
          return { ...s, selected: false };
        }),
        { id: idCount, ...action.payload, updated: new Date(), selected: true },
      ];
    case "deleteSafe":
      const newState = state.filter((s) => s.id !== action.payload);
      return newState.map((s, i) => (i === 0 ? { ...s, selected: true } : s));
    case "updateSafe":
      return state.map((s) =>
        s.id === action.payload.id
          ? { ...action.payload, updated: new Date() }
          : s
      );
    case "selectSafe":
      return state.map((s) =>
        s.id === action.payload
          ? { ...s, selected: true }
          : { ...s, selected: false }
      );
    case "addSafeSecret":
      return state.map((s) =>
        s.selected === true
          ? {
              ...s,
              secrets: [...s.secrets, { ...action.payload, added: new Date() }],
              updated: new Date(),
            }
          : s
      );
    case "deleteSafeSecret":
      return state.map((s) =>
        s.selected === true
          ? {
              ...s,
              secrets: [...s.secrets.filter((sec, i) => i !== action.payload)],
              updated: new Date(),
            }
          : s
      );
    default:
      return state;
  }
};

export default safeReducer;
