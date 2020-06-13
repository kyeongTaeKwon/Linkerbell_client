import { combineReducers } from "redux";
import authReducer from "./auth";
import LinkDataReducer from "./linkData";
const rootReducer = combineReducers({
  auth: authReducer,
  linkData: LinkDataReducer,
///////
// import LinkDataReducer from "./linkdata";
import servicesReducer from "./services";
const rootReducer = combineReducers({
  auth: authReducer,
  // linkData: LinkDataReducer,
  services: servicesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
