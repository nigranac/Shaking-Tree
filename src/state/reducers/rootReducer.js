import { combineReducers } from "redux";
import { shakingReducer } from "./shakingReducer";

export const rootReducer = combineReducers({
  appleList: shakingReducer,
});
