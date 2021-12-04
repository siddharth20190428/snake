const initialState = [
  [4, 5],
  [4, 6],
];

const snakeReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD__CORD":
      newState.push(action.payload);
      return newState;
    case "REMOVE__CORD":
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default snakeReducer;
