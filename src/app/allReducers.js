import { weatherReducer } from "./reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: weatherReducer,
});

export default allReducers;
