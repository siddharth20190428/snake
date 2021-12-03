import { combineReducers } from "redux";
import headReducer from "./headReducer";
import boardReducer from "./boardReducer";
import snakeReducer from "./snakeReducer";

const rootReducer = combineReducers({
  head: headReducer,
  board: boardReducer,
  snake: snakeReducer,
});

export default rootReducer;
