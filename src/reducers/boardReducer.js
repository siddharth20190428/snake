const initialState = new Array(10).fill(0).map((_) => new Array(10).fill(0));

const boardReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET__INIT":
      newState[action.payload[0]][action.payload[1]] = 0;
      return newState;
    case "SET__SNAKE":
      newState[action.payload[0]][action.payload[1]] = 1;
      return newState;
    case "SET__FOOD":
      newState[action.payload[0]][action.payload[1]] = 2;
      return newState;
    default:
      return state;
  }
};

export default boardReducer;
