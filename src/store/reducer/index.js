import { combineReducers } from "redux";
import employeeReducer from "./employeeRerducer";
import appReducer from "./appReducer";

export default combineReducers({
  employee: employeeReducer,
  app: appReducer
});
