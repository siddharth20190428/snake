const initialState = {
  x: 5,
  y: 4,
};

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__HEAD":
      return { ...action.payload };
    default:
      return state;
  }
};

export default headReducer;
