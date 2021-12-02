import snakeReducer from "./snakeReducer";
import headReducer from "./headReducer";
import { combineReducers } from "redux";
import scoreReducer from "./scoreReducer";

const rootReducer = combineReducers({
  snake: snakeReducer,
  head: headReducer,
  score: scoreReducer,
});

export default rootReducer;
