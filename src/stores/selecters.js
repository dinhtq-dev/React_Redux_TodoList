import { createSelector } from "reselect";
const getFilterSearch = (state) => state.filterTodo;
export const originListTodo = (state) => state.listTodo;

export const getListTodo = createSelector(
  originListTodo,
  getFilterSearch,
  (listTodoOrigin, filterSearch) => {
    return listTodoOrigin.filter((item) => {
      console.log(item.name.toLowerCase().includes("danh bong"));
      if (item.name.includes(filterSearch.search)) {
        return item.name.includes(filterSearch.search);
      }
      return listTodoOrigin;
    });
  }
);
