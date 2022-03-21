//Action
export const searchAction = (val) => {
  return { type: "SEARCH", payload: val };
};

//Reducer
export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH":
      return (state = action.payload);
    default:
      return state;
  }
};
