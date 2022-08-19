export const setValueChange = (data) => {
  return {
    type: "changeName",
    payload: data,
  };
};

export const addTodoAction = (data) => {
  return {
    type: "addTodo",
    payload: data,
  };
};
