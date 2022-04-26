import { combineReducers } from "redux";
import Test from "./reducer";

const appReducer = combineReducers({
  Test,
});

export type appReducer = ReturnType<typeof appReducer>;
export default appReducer;
