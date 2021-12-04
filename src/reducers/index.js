import { combineReducers } from "redux";
import headReducer from "./headReducer";
import boardReducer from "./boardReducer";
import snakeReducer from "./snakeReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  head: headReducer,
  board: boardReducer,
  snake: snakeReducer,
  food: foodReducer,
});

export default rootReducer;
