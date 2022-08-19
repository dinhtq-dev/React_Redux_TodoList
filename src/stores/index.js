import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listTodo } from "./reducers/ListTodo";
import { filterTodo } from "./reducers/FilterTodo";
const composeEnhancers = composeWithDevTools();

const rootReducer = combineReducers({
  listTodo,
  filterTodo,
});

// const rootReducer = (state = {}, action) => {
//   return {
//     listTodo: listTodo(state.listTodo, action),
//     filterTodo: filterTodo(state.filterTodo, action),
//   };
// };

export const store = createStore(rootReducer, composeEnhancers);
