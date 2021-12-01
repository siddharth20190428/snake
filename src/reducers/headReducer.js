const initialState = [8, 5];

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_HEAD":
      return [...action.payload];
    default:
      return state;
  }
};

export default headReducer;
