const initialState = {
  y: 4,
  x: 6,
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
