import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = (state = { name: "sdf" }, action) => {
  return state;
};
export const store = createStore(rootReducer, composeWithDevTools);
