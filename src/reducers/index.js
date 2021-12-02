import { combineReducers } from "redux";
import headReducer from "./headReducer";
import snakeReducer from "./snakeReducer";

const rootReducer = combineReducers({ head: headReducer, snake: snakeReducer });

export default rootReducer;
