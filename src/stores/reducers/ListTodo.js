const initialState = [];
const listTodo = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export { listTodo };
