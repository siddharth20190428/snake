import { combineReducers } from "redux";
import headReducer from "./headReducer";
import boardReducer from "./boardReducer";
import snakeReducer from "./snakeReducer";
import foodReducer from "./foodReducer";
import scoreReducer from "./scoreReducer";
import moveReducer from "./moveReducer";

const rootReducer = combineReducers({
  head: headReducer,
  board: boardReducer,
  snake: snakeReducer,
  food: foodReducer,
  score: scoreReducer,
  move: moveReducer,
});

export default rootReducer;
