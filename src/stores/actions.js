export const setValueChange = (data) => {
  return {
    type: "changeName",
    payload: data,
  };
};

export const addTodoAction = (data) => {
  return {
    type: "listTodo/addTodo",
    payload: data,
  };
};

export const deleteTodoItem = (data) => {
  return {
    type: "listTodo/deleteItem",
    payload: data,
  };
};

export const searchInputFilterList = (data) => {
  return {
    type: "filter/inputSearch",
    payload: data,
  };
};
