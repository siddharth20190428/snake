import snakeReducer from "./snakeReducer";
import headReducer from "./headReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ snake: snakeReducer, head: headReducer });

export default rootReducer;
