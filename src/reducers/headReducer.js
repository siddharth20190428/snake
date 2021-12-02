const initialState = [5, 6];

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HEAD":
      console.log("new head", action.payload);
      return [...action.payload];

    default:
      return state;
  }
};

export default headReducer;
