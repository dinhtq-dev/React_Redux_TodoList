import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = (state = {}, action) => {
  return state;
};
export const store = createStore(rootReducer, composeWithDevTools);
