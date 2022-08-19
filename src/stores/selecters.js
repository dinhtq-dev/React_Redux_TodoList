import { createSelector } from "reselect";

export const getFilterSearch = (state) => state.filterTodo;
export const originListTodo = (state) => state.listTodo;

export const getListTodo = createSelector(
  originListTodo,
  getFilterSearch,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name?.toLowerCase().includes(searchText.search.toLowerCase());
    });
  }
);
