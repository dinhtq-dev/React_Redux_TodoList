import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listTodo } from "./reducers/ListTodo";
import { filterTodo } from "./reducers/FilterTodo";
const composeEnhancers = composeWithDevTools();

const rootReducer = combineReducers({
  listTodo: listTodo(),
  filter: filterTodo(),
});
export const store = createStore(rootReducer, composeEnhancers);
