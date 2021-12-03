const initialState = [
  [4, 5],
  [4, 6],
];

const snakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD__CORD":
      let newState = JSON.parse(JSON.stringify(state));
      newState.push(action.payload);
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default snakeReducer;
