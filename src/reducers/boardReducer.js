const initialState = new Array(10).fill(0).map((_) => new Array(10).fill(0));

initialState[4][5] = 1;

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__SNAKE":
      let newState = JSON.parse(JSON.stringify(state));
      newState[action.payload[0]][action.payload[1]] = 1;
      return newState;
    default:
      return state;
  }
};

export default boardReducer;
