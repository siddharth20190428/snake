const headReducer = (state = [5, 6], action) => {
  switch (action.type) {
    case "SET__HEAD":
      return [...action.payload];
    default:
      return state;
  }
};

export default headReducer;
