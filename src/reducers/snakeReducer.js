import { initialSnake } from "../utils";

const initialState = [...initialSnake];

const snakeReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD__CORD":
      newState.push(action.payload);
      return newState;
    case "REMOVE__CORD":
      newState.shift();
      return newState;
    case "RESET__SNAKE":
      return [...initialSnake];
    default:
      return state;
  }
};

export default snakeReducer;
