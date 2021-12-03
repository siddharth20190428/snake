import { combineReducers } from "redux";
import headReducer from "./headReducer";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({ head: headReducer, board: boardReducer });

export default rootReducer;
