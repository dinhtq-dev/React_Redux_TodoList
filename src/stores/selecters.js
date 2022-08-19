import { createSelector } from "reselect";

export const getFilterSearch = (state) => state.filterTodo;
export const originListTodo = (state) => state.listTodo;

export const getListTodo = createSelector(
  originListTodo,
  getFilterSearch,
  (todoList, searchValue) => {
    return todoList.filter((todo) => {
      const keyword = searchValue.search.toLowerCase();
      const todoName = todo.name?.toLowerCase();

      // searchValue.status: all completed todo, todo.completed: true false

      return (
        ((keyword && todoName.includes(keyword)) || !keyword) &&
        ((todo.completed && searchValue.status === "completed") ||
          searchValue.status === "all" ||
          (!todo.completed && searchValue.status === "todo")) &&
        ((searchValue.priority && todo.priority === searchValue.priority) ||
          !searchValue.priority)
      );
    });
  }
);
