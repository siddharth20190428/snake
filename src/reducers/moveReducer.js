const initialState = {
  dy: 0,
  dx: 1,
};

const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__MOVE":
      return { ...action.payload };
    default:
      return state;
  }
};
export default moveReducer;
