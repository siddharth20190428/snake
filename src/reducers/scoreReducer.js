const initialState = 0;

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC__SCORE":
      return state + 1;
    default:
      return state;
  }
};

export default scoreReducer;
