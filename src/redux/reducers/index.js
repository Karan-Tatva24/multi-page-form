import { combineReducers } from "redux";
import formReducer from "./FormReducers";

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
