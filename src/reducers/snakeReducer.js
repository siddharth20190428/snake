const initialState = [
  [5, 5],
  [5, 6],
];

const snakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_HEAD":
      let newState = JSON.parse(JSON.stringify(state));
      newState.push(action.payload);
      newState.shift();
      console.log(newState);
      // console.log("pushed", newState);
      return [...newState];
    default:
      return state;
  }
};

export default snakeReducer;
