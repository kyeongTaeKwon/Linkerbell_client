import { combineReducers } from "redux";
import authReducer from "./auth";
import LinkDataReducer from "./linkData";
const rootReducer = combineReducers({
  auth: authReducer,
  linkData: LinkDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
