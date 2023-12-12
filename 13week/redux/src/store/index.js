import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import nameReducer from "./nameReduser";

const rootReducer = combineReducers({
  counter: counterReducer,
  name: nameReducer,
});

export default rootReducer;
