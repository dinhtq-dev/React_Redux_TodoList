import { createSelector } from "reselect";

export const getFilterSearch = (state) => state.filterTodo;
export const originListTodo = (state) => state.listTodo;

export const getListTodo = createSelector(
  originListTodo,
  getFilterSearch,
  (todoList, searchValue) => {
    return todoList.filter((todo) => {
      return todo.name
        ?.toLowerCase()
        .includes(searchValue.search.toLowerCase()) &&
        todo.priority === searchValue.priority
        ? todo.priority === searchValue.priority
        : !todo.priority === searchValue.priority;
    });
  }
);
