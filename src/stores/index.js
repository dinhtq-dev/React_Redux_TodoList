import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools();
const rootReducer = (state = { name: "sdf" }, action) => {
  return state;
};
export const store = createStore(rootReducer, composeEnhancers);
